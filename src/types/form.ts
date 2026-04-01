export type FormData = {
  fullName: string;
  email: string;
  city: string;
  preferences: string;
};

export type AppScriptPayload = FormData & {
  source: 'digital-concierge';
  createdAt: string;
};
