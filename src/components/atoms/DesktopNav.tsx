type Props = {
  onBack: () => void;
  onNext: () => void;
  showBack?: boolean;
  nextLabel?: string;
};

export const DesktopNav = ({ onBack, onNext, showBack = true, nextLabel = 'Next' }: Props) => (
  <nav className="mt-10 hidden items-center justify-end gap-4 border-t border-slate-800 pt-6 md:flex">
    <button className="rounded border border-slate-700 px-4 py-2 opacity-70" disabled={!showBack} onClick={onBack}>
      Back
    </button>
    <button className="rounded bg-primary px-5 py-2 font-semibold text-black" onClick={onNext}>
      {nextLabel}
    </button>
  </nav>
);
