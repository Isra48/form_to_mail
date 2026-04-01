import type { ReactNode } from 'react';
import { BrandHeader } from '../atoms/BrandHeader';
import { StepIndicator } from '../atoms/StepIndicator';

type Props = {
  step: number;
  children: ReactNode;
};

export const FormLayout = ({ step, children }: Props) => (
  <div className="min-h-screen pb-12">
    <BrandHeader />
    <main className="mx-auto grid w-full max-w-6xl gap-8 px-6 pb-10 pt-4 md:grid-cols-12 md:px-10">
      <section className="md:col-span-7 lg:col-span-6">
        <StepIndicator current={step} total={4} />
        {children}
      </section>

      <aside className="relative hidden min-h-[520px] overflow-hidden rounded-xl border border-slate-800 md:col-span-5 md:block lg:col-span-6">
        <img
          src="https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?auto=format&fit=crop&w=1400&q=80"
          alt="Beach club de Los Cabos con camastros frente al mar"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 p-6 text-onBackground">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Los Cabos, México</p>
          <h3 className="mt-2 font-headline text-3xl font-light">Experiencia de Beach Club</h3>
        </div>
      </aside>
    </main>
  </div>
);
