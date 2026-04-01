import { CityPicker } from '../molecules/CityPicker';

type Props = {
  fullName: string;
  city: string;
  onPickCity: (city: string) => void;
  onBack: () => void;
  onNext: () => void;
  canNext: boolean;
};

export const StepThree = ({ fullName, city, onPickCity, onBack, onNext, canNext }: Props) => (
  <section>
    <h2 className="font-headline text-4xl font-light md:text-5xl">
      {fullName || 'Invitado'},{' '}
      <span className="text-primary italic">¿desde qué ciudad nos visitas?</span>
    </h2>
    <p className="mt-4 max-w-2xl text-lg text-slate-300">
      Selecciona tu ubicación para personalizar tu experiencia de conserjería digital.
    </p>

    <div className="mt-10">
      <CityPicker value={city} onPick={onPickCity} />
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
