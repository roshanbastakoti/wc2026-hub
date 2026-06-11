import { schedule } from '../data.js';
import { askClaudeWithSearch, getCachedValue, minutesAgo, setCachedValue } from '../api.js';
import { getUserTimezone, toLocalTime } from '../utils.js';

const TEN_MINUTES = 10 * 60 * 1000;

function todaysMatches() {
  const now = new Date();
  const today = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, '0'),
    String(now.getDate()).padStart(2, '0')
  ].join('-');
  const matches = schedule.filter((match) => match.date === today && match.stage === 'Group Stage');
  return matches.length ? matches : schedule.filter((match) => match.date === '2026-06-11');
}

function renderAiContent(matchId) {
  const cached = getCachedValue(`score-update:${matchId}`, TEN_MINUTES);
  if (!cached) return '';
  return `
    <div class="ai-result">
      <p>${cached.text}</p>
      <small>Last updated: ${minutesAgo(cached.timestamp)}</small>
    </div>
  `;
}

function formatAiText(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br>');
}

function matchCard(match) {
  return `
    <article class="card match-card" data-match-id="${match.id}">
      <div class="match-topline">
        <span class="status ${match.status.toLowerCase()}">${match.status}</span>
        <span>${toLocalTime(match.date, match.time)}</span>
      </div>
      <div class="versus">
        <span>${match.homeFlag} ${match.home}</span>
        <span class="score-dash">-</span>
        <span>${match.awayFlag} ${match.away}</span>
      </div>
      <p>${match.venue}</p>
      <button class="primary-btn ai-score-btn" type="button" data-match-id="${match.id}">
        <span class="btn-label">Ask AI for update</span>
        <span class="spinner" aria-hidden="true"></span>
      </button>
      <div class="ai-slot">${renderAiContent(match.id)}</div>
    </article>
  `;
}

async function handleScoreUpdate(button, match, container) {
  const card = button.closest('.match-card');
  const slot = card.querySelector('.ai-slot');
  const cached = getCachedValue(`score-update:${match.id}`, TEN_MINUTES);

  if (cached) {
    slot.innerHTML = renderAiContent(match.id);
    return;
  }

  button.classList.add('loading');
  button.disabled = true;

  try {
    const prompt = `Search for the latest live score and match status for the FIFA World Cup 2026 match: ${match.home} vs ${match.away} on ${match.displayDate} at ${match.venue}. Provide: 1) The current score or "Not started yet" if it hasn't kicked off. 2) A 3-sentence summary of key events or pre-match context. Keep the total response under 100 words.`;
    const text = await askClaudeWithSearch(prompt);
    const formatted = formatAiText(text);
    setCachedValue(`score-update:${match.id}`, { text: formatted });
    slot.innerHTML = renderAiContent(match.id);
  } catch (error) {
    slot.innerHTML = `<div class="ai-result error"><p>${error.message}</p></div>`;
  } finally {
    button.classList.remove('loading');
    button.disabled = false;
    container.dispatchEvent(new CustomEvent('score-updated'));
  }
}

export function renderScores(container) {
  const matches = todaysMatches();
  container.innerHTML = `
    <section class="section-heading">
      <div>
        <span class="eyebrow">Live Scores</span>
        <h2>Today's Matches</h2>
        <small>Times shown in your local timezone: ${getUserTimezone()}</small>
      </div>
    </section>
    <section class="match-grid">
      ${matches.map(matchCard).join('')}
    </section>
  `;

  container.querySelectorAll('.ai-score-btn').forEach((button) => {
    const match = matches.find((item) => item.id === button.dataset.matchId);
    button.addEventListener('click', () => handleScoreUpdate(button, match, container));
  });
}
