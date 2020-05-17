import { Config, Status } from '../types';
import { count } from './report';

/**
 * runs all the tests in the `groups` array
 * If there is no exception, that means it ran correctly
 */
export const run = (easy: Config) => {
  for (const group of easy.group) {
    group.hooks.before.all();
    for (const t of group.tests) {
      try {
        group.hooks.before.each();
        t.fn();
        group.hooks.after.each();
        count(Status.Success);
      } catch (e) {
        count(Status.Fail);
      }
    }
    group.hooks.after.all();
  }

  return easy;
};
