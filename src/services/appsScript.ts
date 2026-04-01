import type { AppScriptPayload, FormData } from '../types/form';

export const toAppScriptPayload = (form: FormData): AppScriptPayload => ({
  ...form,
  source: 'digital-concierge',
  createdAt: new Date().toISOString()
});

export const submitToAppsScript = async (payload: AppScriptPayload) => {
  const endpoint = import.meta.env.VITE_APPS_SCRIPT_WEBAPP_URL;

  if (!endpoint) {
    return {
      ok: true,
      mode: 'mock',
      payload
    };
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error('No se pudo enviar la información a App Script.');
  }

  return response.json();
};
