import { useState } from 'react';
import { submitToAppsScript, toAppScriptPayload } from '../../services/appsScript';
import type { FormData } from '../../types/form';

type Props = {
  data: FormData;
  onDone: () => void;
};

export const StepFour = ({ data, onDone }: Props) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    setMessage('');

    try {
      const payload = toAppScriptPayload(data);
      await submitToAppsScript(payload);
      setMessage('Datos preparados y enviados correctamente.');
      onDone();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Error inesperado.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="space-y-6">
      <h2 className="font-headline text-4xl font-light">Resumen y envío</h2>
      <div className="rounded border border-slate-700 bg-surface p-5 text-sm">
        <p><strong>Nombre:</strong> {data.fullName}</p>
        <p><strong>Correo:</strong> {data.email}</p>
        <p><strong>Ciudad:</strong> {data.city}</p>
      </div>
      <p className="text-sm text-slate-400">
        El frontend ya está listo para integrar con App Script usando <code>VITE_APPS_SCRIPT_WEBAPP_URL</code>.
      </p>
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="rounded bg-primary px-4 py-2 font-semibold text-black disabled:opacity-60"
      >
        {loading ? 'Enviando...' : 'Enviar al endpoint'}
      </button>
      {message && <p className="text-sm text-primary">{message}</p>}
    </section>
  );
};
