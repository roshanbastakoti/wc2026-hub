import { probabilities } from '../data.js';
import { askClaudeWithSearch } from '../api.js';

let currentProbabilities = [...probabilities];

function extractJson(text) {
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) throw new Error('AI response did not include JSON.');
  return JSON.parse(match[0]);
}

function probabilityRow(team) {
  const changeClass = team.change?.startsWith('+') ? 'positive' : team.change?.startsWith('-') ? 'negative' : '';
  return `
    <div class="prob-row">
      <div class="prob-meta">
        <span>${team.flag} ${team.name}</span>
        <strong>${team.prob}%</strong>
        <small class="${changeClass}">${team.change || '0'}</small>
      </div>
      <div class="bar-track">
        <span style="width: ${Math.min(100, Number(team.prob) || 0)}%"></span>
      </div>
    </div>
  `;
}

function renderBars(list) {
  return list.map(probabilityRow).join('');
}

async function updateProbabilities(button, list) {
  button.classList.add('loading');
  button.disabled = true;

  try {
    const prompt = 'Use web search to recalculate FIFA World Cup 2026 win probabilities based on the latest fixtures, team news, and results. Respond only with valid JSON in this exact shape: {"teams": [{"name": "France", "flag": "🇫🇷", "prob": 18, "change": "+1"}]}. Include the same ten rows as the baseline where possible: France, Spain, Argentina, England, Portugal, Brazil, Germany, Netherlands, USA, Others. Probabilities must add up to 100.';
    const text = await askClaudeWithSearch(prompt);
    const parsed = extractJson(text);
    if (!Array.isArray(parsed.teams)) throw new Error('AI JSON did not include a teams array.');
    currentProbabilities = parsed.teams;
    list.innerHTML = renderBars(currentProbabilities);
  } catch (error) {
    list.insertAdjacentHTML('afterbegin', `<div class="ai-result error"><p>${error.message}</p></div>`);
  } finally {
    button.classList.remove('loading');
    button.disabled = false;
  }
}

export function renderProbability(container) {
  container.innerHTML = `
    <section class="section-heading action-heading">
      <div>
        <span class="eyebrow">Forecast</span>
        <h2>Win Probability</h2>
      </div>
      <button class="primary-btn" id="probability-update" type="button">
        <span class="btn-label">Update with AI</span>
        <span class="spinner" aria-hidden="true"></span>
      </button>
    </section>
    <section id="probability-list" class="card probability-panel">
      ${renderBars(currentProbabilities)}
    </section>
  `;

  const button = container.querySelector('#probability-update');
  const list = container.querySelector('#probability-list');
  button.addEventListener('click', () => updateProbabilities(button, list));
}
