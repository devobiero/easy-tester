import { CallBackFunction } from '../types';

/**
 * enqueue function accepts a name and a function
 * it pushes the name and function as an object to the `tests` array
 * @param name
 * @param fn
 */
export const enqueue = (name: string, fn: any) => {
  global.easy.queue.push({ name, fn });
};

/**
 * Finds all tests enqueued
 */
export const loadQueue: () => CallBackFunction[] = () => {
  return global.easy.queue;
};

/**
 *  Load each file using `require`, Once a file is loaded, it's tests are
 *  added to the `queue` singleton variable
 *
 * @param files
 */
export const loadFiles = (files: any[]) => {
  files.forEach((file) => {
    require(file);
  });
};
