type Props = {
  current: number;
  total: number;
};

export const StepIndicator = ({ current, total }: Props) => (
  <div className="mb-8 flex flex-col gap-2">
    <span className="text-xs uppercase tracking-[0.3em] text-primary">Paso {current} de {total}</span>
    <div className="flex gap-2">
      {Array.from({ length: total }).map((_, idx) => (
        <span
          key={idx}
          className={`h-1 w-10 ${idx + 1 <= current ? 'bg-primary' : 'bg-slate-700'}`}
        />
      ))}
    </div>
  </div>
);
