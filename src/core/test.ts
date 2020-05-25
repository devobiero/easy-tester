import { It, TestStatus } from '../types';
import { addTest } from './manager';

const it = (name: string, fn: () => void) => {
  addTest({
    name,
    fn,
    status: TestStatus.Queued,
  });
};

it.only = (name: string, fn: () => void) => {
  addTest({
    name,
    fn,
    status: TestStatus.Only,
  });
};

it.skip = (name: string, fn: () => void) => {
  addTest({
    name,
    fn,
    status: TestStatus.Disabled,
  });
};

export const test: It = it;
