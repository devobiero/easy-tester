import path from 'path';
import { loadQueue, run, summary } from '../core';
import { getFilesRecursively } from '../utils';

global.easy = {
  queue: [],
  summary: {
    success: 0,
    fail: 0,
    disabled: 0,
  },
};

const config = {
  rootDir: 'dist',
  testRegex: 'spec.js',
  coveragePathIgnorePatterns: [],
};

// switch working dir
const dirPath = path.join(__dirname, '../../', config.rootDir);

// Get the list of files
const files = process.argv[2]
  ? process.argv.slice(2)
  : getFilesRecursively(dirPath, config.testRegex);

// Load each file using `require`
files.forEach((file) => {
  // Once a file is loaded, it's tests are
  // added to the `queue` singleton variable
  require(file);
});

const tests = loadQueue();

// run all tests
run(tests);

// print summary of results on the console
summary();
