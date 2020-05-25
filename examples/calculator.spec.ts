import { add, subtract } from './calculator';
import {
  beforeEach,
  beforeAll,
  describe,
  expect,
  test,
  afterAll,
  afterEach,
} from '../src';

describe('Calculator', () => {
  beforeAll(() => {});

  beforeEach(() => {});

  test.skip('should add two numbers', () => {
    expect(add(1, 2)).toEqual(3);
  });

  test('should subtract two numbers', () => {
    expect(subtract(3, 2)).toEqual(1);
  });

  afterEach(() => {});

  afterAll(() => {});
});
