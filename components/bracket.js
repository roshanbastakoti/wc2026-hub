import { bracketStages } from '../data.js';
import { askClaudeWithSearch } from '../api.js';

function stageItem(stage) {
  return `
    <article class="bracket-stage">
      <span>${stage.dates}</span>
      <h3>${stage.stage}</h3>
      <p>${stage.detail}</p>
    </article>
  `;
}

async function simulate(button, result) {
  button.classList.add('loading');
  button.disabled = true;

  try {
    const prompt = 'Use web search to predict the FIFA World Cup 2026 winner based on the latest results, injuries, form, and tournament path. Give a clear predicted winner and concise reasoning in 3 to 5 sentences.';
    const text = await askClaudeWithSearch(prompt);
    result.innerHTML = `<div class="ai-result"><p>${text}</p><small>Last updated: just now</small></div>`;
  } catch (error) {
    result.innerHTML = `<div class="ai-result error"><p>${error.message}</p></div>`;
  } finally {
    button.classList.remove('loading');
    button.disabled = false;
  }
}

export function renderBracket(container) {
  container.innerHTML = `
    <section class="section-heading action-heading">
      <div>
        <span class="eyebrow">Knockout Path</span>
        <h2>Bracket Timeline</h2>
      </div>
      <button class="primary-btn" id="simulate-bracket" type="button">
        <span class="btn-label">Simulate bracket</span>
        <span class="spinner" aria-hidden="true"></span>
      </button>
    </section>
    <section class="bracket-grid">
      ${bracketStages.map(stageItem).join('')}
    </section>
    <section id="bracket-result"></section>
  `;

  const button = container.querySelector('#simulate-bracket');
  const result = container.querySelector('#bracket-result');
  button.addEventListener('click', () => simulate(button, result));
}
