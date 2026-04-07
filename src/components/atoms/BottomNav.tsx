type Props = {
  onBack: () => void;
  onNext: () => void;
  showBack?: boolean;
  nextLabel?: string;
};

export const BottomNav = ({ onBack, onNext, showBack = true, nextLabel = 'Next' }: Props) => (
  <nav className="fixed bottom-0 left-0 flex w-full justify-around bg-black/60 px-10 py-4 backdrop-blur md:hidden">
    <button className="opacity-70" disabled={!showBack} onClick={onBack}>Back</button>
    <button className="opacity-40">Skip</button>
    <button className="font-semibold text-primary" onClick={onNext}>{nextLabel}</button>
  </nav>
);
