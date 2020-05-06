export type CallBackFunction = {
  name: string;
  fn: () => void;
};

export type Arg = boolean | object | number | string;

export type AssertTrue = { toBeTruthy(): void };

export type AssertEqual = { toEqual(expected: Arg): void };

export type AssertFalse = { toBeFalsy(): void };

export type Assert = AssertTrue & AssertFalse & AssertEqual;

export enum Status {
  Success = 1,
  Fail,
  Disabled,
}

export type Summary = {
  success: number;
  fail: number;
  disabled: number;
};
