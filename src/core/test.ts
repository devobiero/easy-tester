import { It, TestStatus } from '../types';
import { activeSuite } from './manager';

/**
 * enqueue function accepts a name and a function
 * it pushes the name and function as an object to the `tests` property
 * @param name
 * @param fn
 */
const it = (name: string, fn: () => void) => {
  const suite = activeSuite();
  suite.tests.push({
    name,
    fn,
    status: TestStatus.Queued,
  });
};

it.only = (name: string, fn: () => void) => {
  const suite = activeSuite();
  suite.constraints?.only?.push({ name, fn, status: TestStatus.Queued });
};

it.skip = (name: string, fn: () => void) => {
  const suite = activeSuite();
  suite.constraints?.skip?.push({ name, fn, status: TestStatus.Disabled });
};

export const test: It = it;
