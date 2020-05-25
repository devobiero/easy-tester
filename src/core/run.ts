import { Config, DoneCallback, TestStatus } from '../types';
import { repeat } from '../utils';
import { log } from './report';

const fail = (t: DoneCallback, e: Error) => {
  t.status = TestStatus.Fail;
  log(`${repeat(' ', 4)} ❌ ${t.name}
  ${e.stack}`);
};

const pass = (t: DoneCallback) => {
  log(`${repeat(' ', 4)} ✅ ${t.name}`);
  t.status = TestStatus.Success;
};

/**
 * runs all the tests in the `groups` array while at the same time
 * keeping track of all the pre and post hooks defined
 *
 * If there is an exception it means the test ran successfully
 */
export const run = (easy: Config) => {
  for (const group of easy.group) {
    log(`📥 ${group.name}`);
    group.hooks.before.all();
    for (const t of group.tests) {
      try {
        group.hooks.before.each();
        t.fn();
        pass(t);
        group.hooks.after.each();
      } catch (e) {
        fail(t, e);
      }
    }
    group.hooks.after.all();
  }

  return easy;
};
