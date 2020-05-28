import {
  Config,
  DoneCallback,
  Hook,
  isAfterHook,
  isBeforeHook,
  Suite,
} from '../types';

/**
 * enqueue a test with a status
 * it pushes the name and function as an object to the `tests` property
 * @param test
 */
export const addTest = (test: DoneCallback) => {
  const suite = getActiveSuite();
  suite.tests.push(test);
};

/**
 * load pre and post hooks that are required to run each test case
 *
 * @param hook
 */
export const addHook = (hook: Hook) => {
  const suite = getActiveSuite();

  if (isBeforeHook(hook)) {
    if (hook.before.all) {
      suite.hooks.before.all = hook.before.all;
    } else {
      suite.hooks.before.each = hook.before.each;
    }
  } else if (isAfterHook(hook)) {
    if (hook.after.all) {
      suite.hooks.after.all = hook.after.all;
    } else {
      suite.hooks.after.each = hook.after.each;
    }
  }
};

/**
 * Test suites are held in a queue, the last one is the active suite
 */
export const getActiveSuite = () => {
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
