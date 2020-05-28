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
 * also skips any tests that are disabled
 *
 */
export const run = (easy: Config) => {
  for (const group of easy.group) {
    let tests = group.tests.filter((t) => t.status === TestStatus.Queued);
    const only = group.tests.filter((t) => t.status === TestStatus.Only);
    if (only.length) tests = only;
    log(`📥 ${group.name}`);
    if (group.hooks.before.all) group.hooks.before.all();
    for (const t of tests) {
      try {
        if (group.hooks.before.each) group.hooks.before.each();
        t.fn();
        pass(t);
        if (group.hooks.after.each) group.hooks.after.each();
      } catch (e) {
        fail(t, e);
      }
    }
    if (group.hooks.after.all) group.hooks.after.all();
  }

  return easy;
};
