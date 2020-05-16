import { CallBackFunction, Status } from '../types';
import { count } from './report';
import { log } from './report';

/**
 * runs all the tests in the `allTests` array
 * If there is no exception, that means it ran correctly
 */
export const run = (allTests: CallBackFunction[]) => {
  for (const t of allTests) {
    try {
      t.fn();
      log(`✅ ${t.name}`);
      count(Status.Success);
    } catch (e) {
      log(`❌ ${t.name}`);
      count(Status.Fail);
      log(e.stack);
    }
  }
};
