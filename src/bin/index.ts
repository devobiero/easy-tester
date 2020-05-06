import path from 'path';
import { enqueue, loadQueue, matchers } from '../core';
import { run } from '../core/execute';
import { getFilesRecursively } from '../utils/getFilesRecursively';

const config = {
  rootDir: 'dist',
  testRegex: 'spec.js',
  coveragePathIgnorePatterns: [],
};

const dirPath = path.join(__dirname, '../../', config.rootDir);

// Get the list of files
const files = process.argv[2]
  ? process.argv.slice(2)
  : getFilesRecursively(dirPath, config.testRegex);

// Load each file using `require`
files.forEach((file) => {
  // Once a file is loaded, it's tests are
  // added to the `tests` singleton variable
  require(file);
});

const tests = loadQueue();

run(tests);
