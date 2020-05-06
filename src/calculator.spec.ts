import { add, subtract } from './calculator';
import { expect, test } from './index';


test('should add two numbers', () => {
  expect(add(1, 2)).toEqual(3);
});

test('should subtract two numbers', () => {
  expect(subtract(3, 2)).toEqual(1);
});

test('should be truthy', () => {
  expect(true).toBeTruthy();
});

test('should be falsy', () => {
  expect(false).toBeFalsy();
});
