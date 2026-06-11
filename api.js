const API_URL = 'https://api.anthropic.com/v1/messages';

function getApiKey() {
  return window.CONFIG?.ANTHROPIC_API_KEY || '';
}

function ensureApiKey() {
  const key = getApiKey();
  if (!key || key === 'PASTE_KEY_HERE') {
    throw new Error('Add your Anthropic API key to config.js before using AI updates.');
  }
  return key;
}

async function callClaude(prompt, useSearch = false) {
  const apiKey = ensureApiKey();
  const body = {
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 1024,
    messages: [
      {
        role: 'user',
        content: prompt
      }
    ]
  };

  if (useSearch) {
    body.tools = [{ type: 'web_search_20250305', name: 'web_search' }];
  }

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true'
    },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`Claude API request failed: ${response.status} ${message}`);
  }

  const data = await response.json();
  return data.content.filter((block) => block.type === 'text').map((block) => block.text).join(' ');
}

export function askClaude(prompt) {
  return callClaude(prompt, false);
}

export function askClaudeWithSearch(prompt) {
  return callClaude(prompt, true);
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
