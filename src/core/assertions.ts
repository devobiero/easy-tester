import assert from 'assert';
import { Arg } from '../types';

export const matchers = (actual: Arg) => {
  return {
    toBeTruthy() {
      assert.ok(actual === true);
    },
    toBeFalsy() {
      assert.ok(actual === false);
    },
    toEqual(expected: Arg) {
      assert.strictEqual(actual, expected);
    },
  };
};
