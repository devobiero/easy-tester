import { addHook } from '../manager';

export const beforeEach = (fn: () => void) => {
  addHook({
    before: {
      each: fn,
    },
  });
};
