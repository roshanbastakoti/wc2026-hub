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
    id: 'mex-rsa',
    date: '2026-06-11',
    time: '19:00',
    home: 'Mexico',
    homeFlag: '🇲🇽',
    away: 'South Africa',
    awayFlag: '🇿🇦',
    venue: 'Estadio Azteca, Mexico City',
    stage: 'Group Stage',
    status: 'UPCOMING'
  },
  {
    id: 'kor-cze',
    date: '2026-06-12',
    time: '02:00',
    home: 'South Korea',
    homeFlag: '🇰🇷',
    away: 'Czechia',
    awayFlag: '🇨🇿',
    venue: 'Estadio Akron, Guadalajara',
    stage: 'Group Stage',
    status: 'UPCOMING'
  },
  {
    id: 'can-bih',
    date: '2026-06-12',
    time: '19:00',
    home: 'Canada',
    homeFlag: '🇨🇦',
    away: 'Bosnia & Herzegovina',
    awayFlag: '🇧🇦',
    venue: 'BMO Field, Toronto',
    stage: 'Group Stage',
    status: 'UPCOMING'
  },
  {
    id: 'usa-par',
    date: '2026-06-13',
    time: '01:00',
    home: 'USA',
    homeFlag: '🇺🇸',
    away: 'Paraguay',
    awayFlag: '🇵🇾',
    venue: 'SoFi Stadium, Los Angeles',
    stage: 'Group Stage',
    status: 'UPCOMING'
  },
  {
    id: 'qat-sui',
    date: '2026-06-13',
    time: '19:00',
    home: 'Qatar',
    homeFlag: '🇶🇦',
    away: 'Switzerland',
    awayFlag: '🇨🇭',
    venue: "Levi's Stadium, Santa Clara",
    stage: 'Group Stage',
    status: 'UPCOMING'
  },
  {
    id: 'bra-mar',
    date: '2026-06-13',
    time: '22:00',
    home: 'Brazil',
    homeFlag: '🇧🇷',
    away: 'Morocco',
    awayFlag: '🇲🇦',
    venue: 'MetLife Stadium, New Jersey',
    stage: 'Group Stage',
    status: 'UPCOMING'
  },
  {
    id: 'sco-hai-tbd',
    date: '2026-06-14',
    time: 'TBD',
    home: 'Scotland',
    homeFlag: '🏴',
    away: 'Haiti',
    awayFlag: '🇭🇹',
    venue: 'Venue TBD',
    stage: 'Group Stage',
    status: 'UPCOMING'
  },
  {
    id: 'tur-aus-tbd',
    date: '2026-06-14',
    time: 'TBD',
    home: 'Türkiye',
    homeFlag: '🇹🇷',
    away: 'Australia',
    awayFlag: '🇦🇺',
    venue: 'Venue TBD',
    stage: 'Group Stage',
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
