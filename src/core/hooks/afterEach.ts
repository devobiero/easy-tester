import { activeSuite } from '../manager';

export const afterEach = (fn: () => void) => {
  const suite = activeSuite();
  suite.hooks.after.each = fn;
};
