// We use the assert standard library to make matchers
import { add, subtract } from './calculator';

// We do not need to import the test functions since
// they are made global variables by test.js
global.test('should add two numbers', () => {
  // @ts-ignore
  expect(add(1, 2)).toEqual(3);
});

// @ts-ignore
test('should subtract two numbers', () => {
  // @ts-ignore
  expect(subtract(3, 2)).toEqual(1);
});

// @ts-ignore
test('should be truthy', () => {
  // @ts-ignore
  expect(true).toBeTruthy();
});

// @ts-ignore
test('should be falsy', () => {
  // @ts-ignore
  expect(false).toBeFalsy();
});
