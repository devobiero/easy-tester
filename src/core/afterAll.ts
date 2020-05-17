import { activeSuite } from './queue';

export const afterAll = (fn: () => void) => {
  const suite = activeSuite();
  suite.hooks.after.all = fn;
};
