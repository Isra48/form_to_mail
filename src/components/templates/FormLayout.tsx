import type { ReactNode } from 'react';
import { BottomNav } from '../atoms/BottomNav';
import { BrandHeader } from '../atoms/BrandHeader';
import { StepIndicator } from '../atoms/StepIndicator';

type Props = {
  step: number;
  children: ReactNode;
  onBack: () => void;
  onNext: () => void;
  showBack?: boolean;
  nextLabel?: string;
};

export const FormLayout = ({
  step,
  children,
  onBack,
  onNext,
  showBack,
  nextLabel
}: Props) => (
  <div className="min-h-screen pb-24">
    <BrandHeader />
    <main className="mx-auto w-full max-w-5xl px-6 pb-24 pt-4 md:px-10">
      <StepIndicator current={step} total={4} />
      {children}
    </main>
    <BottomNav onBack={onBack} onNext={onNext} showBack={showBack} nextLabel={nextLabel} />
  </div>
);
