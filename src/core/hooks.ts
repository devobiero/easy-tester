import { addHook } from './manager';

export const afterAll = (fn: () => void) => {
  addHook({
    after: {
      all: fn,
    },
  });
};

export const afterEach = (fn: () => void) => {
  addHook({
    after: {
      each: fn,
    },
  });
};

export const beforeAll = (fn: () => void) => {
  addHook({
    before: {
      all: fn,
    },
  });
};

export const beforeEach = (fn: () => void) => {
  addHook({
    before: {
      each: fn,
    },
  });
};
