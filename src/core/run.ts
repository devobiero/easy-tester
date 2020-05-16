import { Status, Suite } from '../types';
import { repeat } from '../utils';
import { count } from './report';
import { log } from './report';

/**
 * runs all the tests in the `groups` array
 * If there is no exception, that means it ran correctly
 */
export const run = (allTests: Suite[]) => {
  log(`\n${repeat('.', 60)}\n`);
  for (const group of allTests) {
    log(`📥 ${group.name}`);
    for (const t of group.tests) {
      try {
        t.fn();
        if (t.name) {
          log(`✅ ${t.name}`);
          count(Status.Success);
        }
      } catch (e) {
        log(`❌ ${t.name}`);
        count(Status.Fail);
        log(e.stack);
      }
    }
  }
};
