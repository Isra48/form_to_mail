import type { InputHTMLAttributes } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export const TextInput = ({ label, ...props }: Props) => (
  <label className="flex w-full flex-col gap-3">
    <span className="text-xs uppercase tracking-[0.2em] text-outline">{label}</span>
    <input
      {...props}
      className="border-0 border-b border-slate-600 bg-transparent px-0 py-4 text-2xl outline-none transition focus:border-primary"
    />
  </label>
);
