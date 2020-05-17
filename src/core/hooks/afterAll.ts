import { activeSuite } from '../manager';

export const afterAll = (fn: () => void) => {
  const suite = activeSuite();
  suite.hooks.after.all = fn;
};
