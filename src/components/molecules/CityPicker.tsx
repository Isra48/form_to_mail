import { additionalCities, featuredCities } from '../../data/cities';

type Props = {
  value: string;
  onPick: (city: string) => void;
};

export const CityPicker = ({ value, onPick }: Props) => (
  <div className="space-y-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {featuredCities.map((city) => (
        <button
          key={city}
          onClick={() => onPick(city)}
          className={`rounded border p-5 text-left transition ${
            value === city ? 'border-primary bg-surface' : 'border-slate-700 hover:border-slate-500'
          }`}
        >
          <p className="font-headline text-2xl">{city}</p>
        </button>
      ))}
    </div>

    <div>
      <h4 className="mb-3 text-sm uppercase tracking-[0.2em] text-outline">Destinos adicionales</h4>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {additionalCities.map((city) => (
          <button
            key={city}
            onClick={() => onPick(city)}
            className={`rounded border px-3 py-2 text-left text-sm ${
              value === city ? 'border-primary text-primary' : 'border-slate-700 text-slate-300'
            }`}
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  </div>
);
