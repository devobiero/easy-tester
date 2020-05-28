import { addHook } from '../manager';

export const afterEach = (fn: () => void) => {
  addHook({
    after: {
      each: fn,
    },
  });
};
