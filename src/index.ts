import { matchers } from './core/assertions';
import { CallBackFunction } from './types';

const tests: CallBackFunction[] = [];

/**
 * enqueue function accepts a name and a function
 * it pushes the name and function as an object to the `tests` array
 * @param name
 * @param fn
 */
function enqueue(name: string, fn: any) {
  tests.push({ name, fn });
}

/**
 * `run` runs all the tests in the `tests` array
 * If there is no exception, that means it ran correctly
 *
 */
function run() {
  tests.forEach((t) => {
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
  });
}

// Get the list of files from the command line
// arguments
const files = process.argv.slice(2);

global.test = enqueue;
global.expect = matchers;

// Load each file using `require`
files.forEach((file) => {
  // Once a file is loaded, it's tests are
  // added to the `tests` singleton variable
  require(file);
});

/**
 * Now that all the tests from all the files are
 * added, run them one after the other
 */
run();
