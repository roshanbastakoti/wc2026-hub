import { renderScores } from './components/scores.js';
import { renderGroups } from './components/groups.js';
import { renderSchedule } from './components/schedule.js';
import { renderProbability } from './components/probability.js';
import { renderBracket } from './components/bracket.js';

const tabs = {
  scores: renderScores,
  groups: renderGroups,
  schedule: renderSchedule,
  probability: renderProbability,
  bracket: renderBracket
};

const tabButtons = document.querySelectorAll('.tab-btn');
const appRoot = document.querySelector('#tab-content');

function setActiveTab(tabName) {
  tabButtons.forEach((button) => {
    const active = button.dataset.tab === tabName;
    button.classList.toggle('active', active);
    button.setAttribute('aria-selected', String(active));
  });

  appRoot.classList.remove('is-visible');
  window.setTimeout(() => {
    tabs[tabName](appRoot);
    appRoot.classList.add('is-visible');
  }, 120);
}

tabButtons.forEach((button) => {
  button.addEventListener('click', () => setActiveTab(button.dataset.tab));
});

setActiveTab('scores');
