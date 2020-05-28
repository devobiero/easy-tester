import { It, TestStatus } from '../types';
import { addTest } from './manager';

const test = (name: string, fn: () => void) => {
  addTest({
    name,
    fn,
    status: TestStatus.Queued,
  });
};

test.only = (name: string, fn: () => void) => {
  addTest({
    name,
    fn,
    status: TestStatus.Only,
  });
};

test.skip = (name: string, fn: () => void) => {
  addTest({
    name,
    fn,
    status: TestStatus.Disabled,
  });
};

export const it: It = test;
