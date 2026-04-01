import { TextInput } from '../atoms/TextInput';

type Props = {
  fullName: string;
  email: string;
  onChange: (value: string) => void;
  onNext: () => void;
  onBack: () => void;
  canNext: boolean;
};

export const StepTwo = ({ fullName, email, onChange, onNext, onBack, canNext }: Props) => (
  <section>
    <h2 className="font-headline text-4xl font-light md:text-5xl">
      <span className="text-primary italic">{fullName || '[Nombre]'}</span>, es un placer.
    </h2>
    <p className="mt-4 max-w-2xl text-2xl text-slate-300 md:text-3xl">
      ¿A qué correo podemos enviarte tu invitación personalizada?
    </p>
    <div className="mt-10 max-w-xl">
      <TextInput
        type="email"
        label="Correo electrónico"
        placeholder="ejemplo@luxury.com"
        value={email}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>

    <div className="mt-8 flex flex-wrap gap-3">
      <button onClick={onBack} className="rounded-full border border-slate-500 px-6 py-3 text-xs uppercase tracking-wider text-slate-300">
        Regresar
      </button>
      <button
        onClick={onNext}
        disabled={!canNext}
        className="rounded-full border border-primary px-6 py-3 text-xs font-semibold uppercase tracking-wider text-primary transition hover:bg-primary hover:text-black disabled:cursor-not-allowed disabled:opacity-40"
      >
        Continuar
      </button>
    </div>
  </section>
);
