import { addHook } from '../manager';

export const afterAll = (fn: () => void) => {
  addHook({
    after: {
      all: fn,
    },
  });
};
