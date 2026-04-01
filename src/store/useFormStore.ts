import { create } from 'zustand';
import type { FormData } from '../types/form';

type FormStore = {
  step: number;
  data: FormData;
  setField: <K extends keyof FormData>(field: K, value: FormData[K]) => void;
  next: () => void;
  prev: () => void;
  reset: () => void;
};

const initialData: FormData = {
  fullName: '',
  email: '',
  city: '',
  preferences: ''
};

export const useFormStore = create<FormStore>((set) => ({
  step: 1,
  data: initialData,
  setField: (field, value) =>
    set((state) => ({ data: { ...state.data, [field]: value } })),
  next: () => set((state) => ({ step: Math.min(state.step + 1, 4) })),
  prev: () => set((state) => ({ step: Math.max(state.step - 1, 1) })),
  reset: () => set({ step: 1, data: initialData })
}));
