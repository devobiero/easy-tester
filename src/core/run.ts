import { Config, Status } from '../types';
import { count } from './report';

/**
 * runs all the tests in the `groups` array
 * If there is no exception, that means it ran correctly
 */
export const run = (easy: Config) => {
  for (const group of easy.group) {
    for (const t of group.tests) {
      try {
        t.fn();
        if (t.name) {
          count(Status.Success);
        }
      } catch (e) {
        count(Status.Fail);
      }
    }
  }

  return easy;
};
