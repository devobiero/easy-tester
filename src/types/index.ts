export type CallBackFunction = {
  name: string;
  fn: () => void;
};

export type Arg = boolean | object;

export type AssertTrue = { toBeTruthy(): void };

export type AssertEqual = { toEqual(expected: Arg): void };

export type AssertFalse = { toBeFalsy(): void };

export type Assert = AssertTrue & AssertFalse & AssertEqual;




