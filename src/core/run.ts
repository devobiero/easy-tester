import { Config, TestStatus } from '../types';
import { log } from './report';

/**
 * runs all the tests in the `groups` array while at the same time
 * keeping track of all the pre and post hooks defined
 *
 * If there is an exception it means the test ran successfully
 */
export const run = (easy: Config) => {
  for (const group of easy.group) {
    group.hooks.before.all();
    for (const t of group.tests) {
      try {
        group.hooks.before.each();
        t.fn();
        group.hooks.after.each();
        t.status = TestStatus.Success;
      } catch (e) {
        t.status = TestStatus.Fail;
        log(`
        ❌ ${t.name}
        ${e.stack}`);
      }
    }
    group.hooks.after.all();
  }

  return easy;
};
