import { TextInput } from '../atoms/TextInput';

type Props = {
  fullName: string;
  onChange: (value: string) => void;
  onNext: () => void;
  canNext: boolean;
};

export const StepOne = ({ fullName, onChange, onNext, canNext }: Props) => (
  <section className="bg-luxury-texture rounded p-6 md:p-10">
    <p className="text-xs uppercase tracking-[0.3em] text-primary">Personalización</p>
    <h2 className="mt-3 font-headline text-4xl font-light md:text-6xl">
      Bienvenido a <em className="text-primary">The Grand Aethel</em>
    </h2>
    <h3 className="mt-4 font-headline text-2xl text-slate-300">¿Cómo deberíamos llamarte?</h3>
    <div className="mt-8 max-w-xl">
      <TextInput
        label="Nombre"
        placeholder="Ingresa tu nombre"
        value={fullName}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>

    <button
      onClick={onNext}
      disabled={!canNext}
      className="mt-8 rounded-full border border-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary transition hover:bg-primary hover:text-black disabled:cursor-not-allowed disabled:opacity-40"
    >
      Continuar
    </button>
  </section>
);
