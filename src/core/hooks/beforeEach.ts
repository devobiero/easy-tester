import { activeSuite } from '../queue';

export const beforeEach = (fn: () => void) => {
  const suite = activeSuite();
  suite.hooks.before.each = fn;
};
