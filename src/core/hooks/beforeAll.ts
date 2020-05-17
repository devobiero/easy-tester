import { activeSuite } from '../queue';

export const beforeAll = (fn: () => void) => {
  const suite = activeSuite();
  suite.hooks.before.all = fn;
};
