import { schedule, stages } from '../data.js';
import { getUserTimezone, toLocalTime } from '../utils.js';

function matchPassesFilters(match, teamQuery, stage) {
  const teams = `${match.home} ${match.away}`.toLowerCase();
  const teamMatches = !teamQuery || teams.includes(teamQuery.toLowerCase());
  const stageMatches = stage === 'All stages' || match.stage === stage;
  return teamMatches && stageMatches;
}

function scheduleCard(match) {
  return `
    <article class="card schedule-card">
      <div>
        <span class="status">${match.stage}</span>
        <h3>${toLocalTime(match.date, match.time)}</h3>
      </div>
      <div class="versus compact">
        <span>${match.homeFlag} ${match.home}</span>
        <strong>vs</strong>
        <span>${match.awayFlag} ${match.away}</span>
      </div>
      <p>${match.venue}</p>
    </article>
  `;
}

export function renderSchedule(container) {
  container.innerHTML = `
    <section class="section-heading">
      <div>
        <span class="eyebrow">Fixtures</span>
        <h2>Schedule</h2>
        <small>Times shown in your local timezone: ${getUserTimezone()}</small>
      </div>
    </section>
    <section class="toolbar">
      <label>
        <span>Team</span>
        <input id="team-filter" type="search" placeholder="Search team name">
      </label>
      <label>
        <span>Stage</span>
        <select id="stage-filter">
          <option>All stages</option>
          ${stages.map((stage) => `<option>${stage}</option>`).join('')}
        </select>
      </label>
    </section>
    <section id="schedule-list" class="schedule-list"></section>
  `;

  const teamFilter = container.querySelector('#team-filter');
  const stageFilter = container.querySelector('#stage-filter');
  const list = container.querySelector('#schedule-list');

  function renderList() {
    const filtered = schedule.filter((match) => matchPassesFilters(match, teamFilter.value.trim(), stageFilter.value));
    list.innerHTML = filtered.length
      ? filtered.map(scheduleCard).join('')
      : '<p class="empty-state">No matches found for those filters.</p>';
  }

  teamFilter.addEventListener('input', renderList);
  stageFilter.addEventListener('change', renderList);
  renderList();
}
