import { TextInput } from '../atoms/TextInput';

type Props = {
  fullName: string;
  email: string;
  onChange: (value: string) => void;
};

export const StepTwo = ({ fullName, email, onChange }: Props) => (
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
  </section>
);
