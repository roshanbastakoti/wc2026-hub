export const tournamentInfo = {
  dates: 'June 11 - July 19, 2026',
  teams: 48,
  matches: 104,
  stadiums: 16,
  hosts: 'USA, Canada, Mexico',
  openingMatch: {
    teams: 'Mexico vs South Africa',
    venue: 'Estadio Azteca',
    date: 'June 11'
  },
  final: {
    venue: 'MetLife Stadium, New Jersey',
    dateStr: '2026-07-19',
    date: 'July 19',
    time: '19:00'
  },
  advancement: 'Top 2 per group plus the 8 best 3rd-place teams advance to the Round of 32.'
};

export const groups = [
  {
    name: 'Group A',
    teams: [
      { name: 'Mexico', flag: '🇲🇽', note: 'host' },
      { name: 'South Korea', flag: '🇰🇷' },
      { name: 'Czechia', flag: '🇨🇿' },
      { name: 'South Africa', flag: '🇿🇦' }
    ]
  },
  {
    name: 'Group B',
    teams: [
      { name: 'Canada', flag: '🇨🇦', note: 'host' },
      { name: 'Switzerland', flag: '🇨🇭' },
      { name: 'Bosnia & Herzegovina', flag: '🇧🇦' },
      { name: 'Qatar', flag: '🇶🇦' }
    ]
  },
  {
    name: 'Group C',
    teams: [
      { name: 'Brazil', flag: '🇧🇷' },
      { name: 'Morocco', flag: '🇲🇦' },
      { name: 'Scotland', flag: '🏴' },
      { name: 'Haiti', flag: '🇭🇹' }
    ]
  },
  {
    name: 'Group D',
    teams: [
      { name: 'USA', flag: '🇺🇸', note: 'host' },
      { name: 'Türkiye', flag: '🇹🇷' },
      { name: 'Paraguay', flag: '🇵🇾' },
      { name: 'Australia', flag: '🇦🇺' }
    ]
  },
  {
    name: 'Group E',
    teams: [
      { name: 'Germany', flag: '🇩🇪' },
      { name: 'Ecuador', flag: '🇪🇨' },
      { name: "Côte d'Ivoire", flag: '🇨🇮' },
      { name: 'Curaçao', flag: '🇨🇼' }
    ]
  },
  {
    name: 'Group F',
    teams: [
      { name: 'Netherlands', flag: '🇳🇱' },
      { name: 'Japan', flag: '🇯🇵' },
      { name: 'Sweden', flag: '🇸🇪' },
      { name: 'Tunisia', flag: '🇹🇳' }
    ]
  },
  {
    name: 'Group G',
    teams: [
      { name: 'Belgium', flag: '🇧🇪' },
      { name: 'Egypt', flag: '🇪🇬' },
      { name: 'IR Iran', flag: '🇮🇷' },
      { name: 'New Zealand', flag: '🇳🇿' }
    ]
  },
  {
    name: 'Group H',
    teams: [
      { name: 'Spain', flag: '🇪🇸' },
      { name: 'Uruguay', flag: '🇺🇾' },
      { name: 'Saudi Arabia', flag: '🇸🇦' },
      { name: 'Cabo Verde', flag: '🇨🇻' }
    ]
  },
  {
    name: 'Group I',
    teams: [
      { name: 'France', flag: '🇫🇷' },
      { name: 'Senegal', flag: '🇸🇳' },
      { name: 'Norway', flag: '🇳🇴' },
      { name: 'Iraq', flag: '🇮🇶' }
    ]
  },
  {
    name: 'Group J',
    teams: [
      { name: 'Argentina', flag: '🇦🇷' },
      { name: 'Austria', flag: '🇦🇹' },
      { name: 'Algeria', flag: '🇩🇿' },
      { name: 'Jordan', flag: '🇯🇴' }
    ]
  },
  {
    name: 'Group K',
    teams: [
      { name: 'Portugal', flag: '🇵🇹' },
      { name: 'Colombia', flag: '🇨🇴' },
      { name: 'Congo DR', flag: '🇨🇩' },
      { name: 'Uzbekistan', flag: '🇺🇿' }
    ]
  },
  {
    name: 'Group L',
    teams: [
      { name: 'England', flag: '🏴' },
      { name: 'Croatia', flag: '🇭🇷' },
      { name: 'Ghana', flag: '🇬🇭' },
      { name: 'Panama', flag: '🇵🇦' }
    ]
  }
];

export const schedule = [
  {
    id: 'mex-rsa-2026-06-11',
    date: '2026-06-11',
    displayDate: 'June 11',
    time: '23:00',
    stage: 'Group Stage',
    home: 'Mexico',
    homeFlag: '🇲🇽',
    away: 'South Africa',
    awayFlag: '🇿🇦',
    venue: 'Estadio Azteca',
    status: 'UPCOMING'
  },
  {
    id: 'kor-cze-2026-06-12',
    date: '2026-06-12',
    displayDate: 'June 12',
    time: '21:00',
    stage: 'Group Stage',
    home: 'South Korea',
    homeFlag: '🇰🇷',
    away: 'Czechia',
    awayFlag: '🇨🇿',
    venue: 'BMO Field',
    status: 'UPCOMING'
  },
  {
    id: 'can-qat-2026-06-13',
    date: '2026-06-13',
    displayDate: 'June 13',
    time: '00:00',
    stage: 'Group Stage',
    home: 'Canada',
    homeFlag: '🇨🇦',
    away: 'Qatar',
    awayFlag: '🇶🇦',
    venue: 'BC Place',
    status: 'UPCOMING'
  },
  {
    id: 'usa-aus-2026-06-13',
    date: '2026-06-13',
    displayDate: 'June 13',
    time: '23:00',
    stage: 'Group Stage',
    home: 'USA',
    homeFlag: '🇺🇸',
    away: 'Australia',
    awayFlag: '🇦🇺',
    venue: 'SoFi Stadium',
    status: 'UPCOMING'
  },
  {
    id: 'bra-hai-2026-06-14',
    date: '2026-06-14',
    displayDate: 'June 14',
    time: '01:00',
    stage: 'Group Stage',
    home: 'Brazil',
    homeFlag: '🇧🇷',
    away: 'Haiti',
    awayFlag: '🇭🇹',
    venue: 'Hard Rock Stadium',
    status: 'UPCOMING'
  },
  {
    id: 'fra-irq-2026-06-14',
    date: '2026-06-14',
    displayDate: 'June 14',
    time: '22:00',
    stage: 'Group Stage',
    home: 'France',
    homeFlag: '🇫🇷',
    away: 'Iraq',
    awayFlag: '🇮🇶',
    venue: 'Lumen Field',
    status: 'UPCOMING'
  },
  {
    id: 'arg-jor-2026-06-15',
    date: '2026-06-15',
    displayDate: 'June 15',
    time: '01:00',
    stage: 'Group Stage',
    home: 'Argentina',
    homeFlag: '🇦🇷',
    away: 'Jordan',
    awayFlag: '🇯🇴',
    venue: 'AT&T Stadium',
    status: 'UPCOMING'
  },
  {
    id: 'por-uzb-2026-06-16',
    date: '2026-06-16',
    displayDate: 'June 16',
    time: '00:00',
    stage: 'Group Stage',
    home: 'Portugal',
    homeFlag: '🇵🇹',
    away: 'Uzbekistan',
    awayFlag: '🇺🇿',
    venue: 'Gillette Stadium',
    status: 'UPCOMING'
  },
  {
    id: 'r32-1-2026-06-28',
    date: '2026-06-28',
    displayDate: 'June 28',
    time: 'TBD',
    stage: 'Round of 32',
    home: 'Group qualifier',
    homeFlag: '🏆',
    away: 'Group qualifier',
    awayFlag: '🏆',
    venue: 'TBD',
    status: 'UPCOMING'
  },
  {
    id: 'r16-1-2026-07-04',
    date: '2026-07-04',
    displayDate: 'July 4',
    time: 'TBD',
    stage: 'Round of 16',
    home: 'Round of 32 winner',
    homeFlag: '🏆',
    away: 'Round of 32 winner',
    awayFlag: '🏆',
    venue: 'TBD',
    status: 'UPCOMING'
  },
  {
    id: 'qf-1-2026-07-09',
    date: '2026-07-09',
    displayDate: 'July 9',
    time: 'TBD',
    stage: 'Quarter-finals',
    home: 'Round of 16 winner',
    homeFlag: '🏆',
    away: 'Round of 16 winner',
    awayFlag: '🏆',
    venue: 'TBD',
    status: 'UPCOMING'
  },
  {
    id: 'sf-1-2026-07-14',
    date: '2026-07-14',
    displayDate: 'July 14',
    time: 'TBD',
    stage: 'Semi-finals',
    home: 'Quarter-final winner',
    homeFlag: '🏆',
    away: 'Quarter-final winner',
    awayFlag: '🏆',
    venue: 'TBD',
    status: 'UPCOMING'
  },
  {
    id: 'final-2026-07-19',
    date: '2026-07-19',
    displayDate: 'July 19',
    time: '19:00',
    stage: 'Final',
    home: 'Semi-final winner',
    homeFlag: '🏆',
    away: 'Semi-final winner',
    awayFlag: '🏆',
    venue: 'MetLife Stadium, New Jersey',
    status: 'UPCOMING'
  }
];

export const probabilities = [
  { name: 'France', flag: '🇫🇷', prob: 17, change: '0' },
  { name: 'Spain', flag: '🇪🇸', prob: 14, change: '0' },
  { name: 'Argentina', flag: '🇦🇷', prob: 13, change: '0' },
  { name: 'England', flag: '🏴', prob: 11, change: '0' },
  { name: 'Portugal', flag: '🇵🇹', prob: 9, change: '0' },
  { name: 'Brazil', flag: '🇧🇷', prob: 9, change: '0' },
  { name: 'Germany', flag: '🇩🇪', prob: 7, change: '0' },
  { name: 'Netherlands', flag: '🇳🇱', prob: 5, change: '0' },
  { name: 'USA', flag: '🇺🇸', prob: 3, change: '0' },
  { name: 'Others', flag: '🌍', prob: 12, change: '0' }
];

export const bracketStages = [
  { stage: 'Group Stage', dates: 'June 11 - June 27', detail: '12 groups of 4; top 2 plus 8 best third-place teams advance.' },
  { stage: 'Round of 32', dates: 'June 28 - July 3', detail: '32 qualifiers enter the knockout bracket.' },
  { stage: 'Round of 16', dates: 'July 4 - July 7', detail: '16 winners continue.' },
  { stage: 'Quarter-finals', dates: 'July 9 - July 11', detail: '8 teams remain.' },
  { stage: 'Semi-finals', dates: 'July 14 - July 15', detail: 'The last four play for final places.' },
  { stage: 'Third-place Match', dates: 'July 18', detail: 'Semi-final runners-up meet.' },
  { stage: 'Final', dates: 'July 19', detail: 'MetLife Stadium, New Jersey.' }
];

export const stages = [
  'Group Stage',
  'Round of 32',
  'Round of 16',
  'Quarter-finals',
  'Semi-finals',
  'Final'
];
