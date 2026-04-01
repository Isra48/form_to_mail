import { CityPicker } from '../molecules/CityPicker';

type Props = {
  fullName: string;
  city: string;
  onPickCity: (city: string) => void;
};

export const StepThree = ({ fullName, city, onPickCity }: Props) => (
  <section>
    <h2 className="font-headline text-4xl font-light md:text-5xl">
      {fullName || 'Invitado'}, <span className="text-primary italic">¿desde qué ciudad nos visitas?</span>
    </h2>
    <p className="mt-4 max-w-2xl text-lg text-slate-300">
      Selecciona tu ubicación para personalizar tu experiencia de conserjería digital.
    </p>

    <div className="mt-10">
      <CityPicker value={city} onPick={onPickCity} />
    </div>
  </section>
);
