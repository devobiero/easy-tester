import { createSuite } from './manager';

export const describe = (name: string, fn: () => void) => {
  createSuite({
    name,
    cb: fn,
    tests: [],
    hooks: {
      before: {
        all: () => {},
        each: () => {},
      },
      after: {
        all: () => {},
        each: () => {},
      },
    },
  });
};
