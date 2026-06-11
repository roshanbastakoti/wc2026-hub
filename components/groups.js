import { groups, tournamentInfo } from '../data.js';
import { toLocalTime } from '../utils.js';

export function renderGroups(container) {
  container.innerHTML = `
    <section class="info-band">
      <div>
        <span class="eyebrow">Tournament</span>
        <h2>${tournamentInfo.dates}</h2>
        <p>${tournamentInfo.teams} teams, ${tournamentInfo.matches} matches, ${tournamentInfo.stadiums} stadiums across ${tournamentInfo.hosts}.</p>
      </div>
      <div class="info-grid">
        <span><strong>Opening</strong>${tournamentInfo.openingMatch.teams}<small>${tournamentInfo.openingMatch.venue}, ${tournamentInfo.openingMatch.date}</small></span>
        <span><strong>Final</strong>${tournamentInfo.final.venue}<small>${toLocalTime(tournamentInfo.final.dateStr, tournamentInfo.final.time)}</small></span>
        <span><strong>Format</strong>Round of 32<small>${tournamentInfo.advancement}</small></span>
      </div>
    </section>
    <section class="group-grid">
      ${groups.map((group) => `
        <article class="card group-card">
          <h3>${group.name}</h3>
          <ul>
            ${group.teams.map((team) => `
              <li>
                <span class="flag">${team.flag}</span>
                <span>${team.name}</span>
                ${team.note ? `<em>${team.note}</em>` : ''}
              </li>
            `).join('')}
          </ul>
        </article>
      `).join('')}
    </section>
  `;
}
