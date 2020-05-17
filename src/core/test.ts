import { TestStatus } from '../types';
import { activeSuite } from './manager';

/**
 * enqueue function accepts a name and a function
 * it pushes the name and function as an object to the `tests` property
 * @param name
 * @param fn
 */
export const test = (name: string, fn: () => void) => {
  const suite = activeSuite();
  suite.tests.push({
    name,
    fn,
    status: TestStatus.Queued,
  });
};
