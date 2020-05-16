import { createSuite } from './queue';

export const describe = (name: string, fn: () => void) => {
  createSuite({
    name,
    fn,
    tests: [],
  });
};
