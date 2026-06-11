export function toLocalTime(dateStr, timeStr, sourceTimezone = 'UTC') {
  if (!/^\d{2}:\d{2}$/.test(timeStr)) {
    const sourceDate = new Date(`${dateStr}T00:00:00`);
    const dateLabel = new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric'
    }).format(sourceDate);
    return `${dateLabel} · ${timeStr}`;
  }

  // dateStr = '2026-06-11', timeStr = '23:00'
  const utc = new Date(`${dateStr}T${timeStr}:00Z`);

  const userTZ = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone: userTZ,
    timeZoneName: 'shortGeneric'
  }).format(utc);
}

export function getUserTimezone() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}
