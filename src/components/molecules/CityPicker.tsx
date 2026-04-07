import { additionalCities, featuredCities } from '../../data/cities';

type Props = {
  value: string;
  onPick: (city: string) => void;
};

export const CityPicker = ({ value, onPick }: Props) => (
  <div className="space-y-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
      {featuredCities.map((city) => (
        <button
          key={city.name}
          onClick={() => onPick(city.name)}
          className={`group relative min-h-40 overflow-hidden rounded border text-left transition md:min-h-56 ${
            value === city.name ? 'border-primary' : 'border-slate-700 hover:border-slate-500'
          }`}
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.78), rgba(0,0,0,0.38)), url('${city.image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <p className="absolute bottom-4 left-4 font-headline text-2xl">{city.name}</p>
        </button>
      ))}
    </div>

    <div>
      <h4 className="mb-3 text-sm uppercase tracking-[0.2em] text-outline">Destinos adicionales</h4>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
        {additionalCities.map((city) => (
          <button
            key={city.name}
            onClick={() => onPick(city.name)}
            className={`relative min-h-24 overflow-hidden rounded border px-3 py-2 text-left text-sm ${
              value === city.name ? 'border-primary text-primary' : 'border-slate-700 text-slate-300'
            }`}
            style={{
              backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.45)), url('${city.image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <span className="relative z-10">{city.name}</span>
          </button>
        ))}
      </div>
    </div>
  </div>
);
