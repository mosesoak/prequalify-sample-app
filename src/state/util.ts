// Enables reducers to infer payload types more easily
// from https://redux-toolkit.js.org/usage/usage-with-typescript#createaction
export function withPayloadType<T>() {
  return (t: T) => ({ payload: t });
}
