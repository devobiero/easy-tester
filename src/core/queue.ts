import { CallBackFunction } from '../types';

/**
 * enqueue function accepts a name and a function
 * it pushes the name and function as an object to the `tests` array
 * @param name
 * @param fn
 */
export const enqueue = (name: string, fn: any) => {
  // @ts-ignore
  global.easy.queue.push({ name, fn });
};

/**
 * Finds all tests enqueued
 */
export const loadQueue: () => CallBackFunction[] = () => {
  // @ts-ignore
  return global.easy.queue;
};
