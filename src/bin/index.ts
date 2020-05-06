import { enqueue, findAll, matchers } from '../core';
import { run } from '../core/execute';

global.queue = [];

// Get the list of files from the command line arguments
const files = process.argv.slice(2);

// Load each file using `require`
files.forEach((file) => {
  // Once a file is loaded, it's tests are
  // added to the `tests` singleton variable
  require(file);
});

const tests = findAll();

run(tests);
