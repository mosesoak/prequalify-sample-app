export type CreateAcctState = {
  loading?: boolean;
  error?: string;
  username: string;
  password: string;
};

export type CreateAcctChangePayload = {
  id: keyof CreateAcctState;
  value: any;
};
