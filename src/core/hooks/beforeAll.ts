import { addHook } from '../manager';

export const beforeAll = (fn: () => void) => {
  addHook({
    before: {
      all: fn,
    },
  });
};
