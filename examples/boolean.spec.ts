import { beforeEach, describe, expect, test } from '../src';

describe('Booleans', () => {
  beforeEach(() => {});

  test('should be truthy', () => {
    expect(true).toBeTruthy();
  });

  test('should be falsy', () => {
    expect(false).toBeFalsy();
  });
});
