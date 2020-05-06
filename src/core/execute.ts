import { CallBackFunction } from '../types';

/**
 * runs all the tests in the `allTests` array
 * If there is no exception, that means it ran correctly
 */
export const run = (allTests: CallBackFunction[]) => {
  for (const t of allTests) {
    try {
      t.fn();
      // If there is no exception
      // that means it ran correctly
      console.log('✅', t.name);
    } catch (e) {
      // Exceptions, if any, are caught
      // and the test is considered failed
      console.log('❌', t.name);
      // log the stack of the error
      console.log(e.stack);
    }
  }
};
