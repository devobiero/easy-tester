import { createSuite } from './queue';

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
