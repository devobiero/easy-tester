import { Config, Suite } from '../types';

/**
 * Test suites are held in a queue, the last one is the active suite
 */
export const activeSuite = () => {
  const suites = global.easy.group;
  return suites[suites.length - 1];
};

/**
 * Create a placeholder for holding the tests
 * and execute the callback function
 *
 * @param suite
 */
export const createSuite = (suite: Suite) => {
  global.easy.group.push(suite);
  // load test suite body
  suite.cb();
};

/**
 * Finds all tests and configurations enqueued
 */
export const getConfig = (): Config => {
  return global.easy;
};

/**
 *  Load each file using `require`, Once a file is loaded, it's cb are
 *  added to the `groups` singleton variable
 *
 * @param files
 */
export const loadFiles = (files: any[]) => {
  files.forEach((file) => {
    require(file);
  });
};
