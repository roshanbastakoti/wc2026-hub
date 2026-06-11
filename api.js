const PROXY_URL = '/api/proxy';

export async function askClaude(prompt) {
  return callProxy(prompt, false);
}

export async function askClaudeWithSearch(prompt) {
  return callProxy(prompt, true);
}

async function callProxy(prompt, useSearch) {
  const response = await fetch(PROXY_URL, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ prompt, useSearch })
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({ error: 'Request failed' }));
    throw new Error(err.error || `Request failed: ${response.status}`);
  }

  const data = await response.json();
  return data.text;
}

export function getCachedValue(key, maxAgeMs) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const cached = JSON.parse(raw);
    if (!cached.timestamp || Date.now() - cached.timestamp > maxAgeMs) return null;
    return cached;
  } catch {
    return null;
  }
}

export function setCachedValue(key, value) {
  const payload = { ...value, timestamp: Date.now() };
  localStorage.setItem(key, JSON.stringify(payload));
  return payload;
}

export function minutesAgo(timestamp) {
  const minutes = Math.max(0, Math.floor((Date.now() - timestamp) / 60000));
  return minutes === 0 ? 'just now' : `${minutes} min${minutes === 1 ? '' : 's'} ago`;
}
