import { activeSuite } from './queue';

/**
 * add beforeEach function at the beginning of the queue
 * so that it can be processed first
 *
 * @param fn
 */
export const beforeEach = (fn: () => void) => {
  const suite = activeSuite();
  suite.tests.unshift({ fn, name: '' });
};
