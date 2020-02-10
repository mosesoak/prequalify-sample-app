// Expected service response shapes

export type PrequalifyResponse = {
  is_qualified: boolean;
  reason?: string; // if not qualified server might return an indication why
};
