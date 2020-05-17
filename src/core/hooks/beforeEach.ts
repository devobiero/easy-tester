import { activeSuite } from '../manager';

export const beforeEach = (fn: () => void) => {
  const suite = activeSuite();
  suite.hooks.before.each = fn;
};
