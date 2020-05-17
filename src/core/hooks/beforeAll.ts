import { activeSuite } from '../manager';

export const beforeAll = (fn: () => void) => {
  const suite = activeSuite();
  suite.hooks.before.all = fn;
};
