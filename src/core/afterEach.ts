import { activeSuite } from './queue';

export const afterEach = (fn: () => void) => {
  const suite = activeSuite();
  suite.hooks.after.each = fn;
};
