export * from './custom';

export type Arg = boolean | object | number | string;

export type AssertTrue = { toBeTruthy(): void };

export type AssertEqual = { toEqual(expected: Arg): void };

export type AssertFalse = { toBeFalsy(): void };

export type Assert = AssertTrue & AssertFalse & AssertEqual;

export enum TestStatus {
  Success = 1,
  Fail,
  Disabled,
  Queued,
}

export type DirConfig = {
  rootDir: string;
  testRegex: string;
  fileName: string;
};

export type FileNameConfig = DirConfig & { fileName: string };

export type RegexConfig = DirConfig & { testRegex: string };

export type TestFileConfig = FileNameConfig | RegexConfig;

export type TestFunction = {
  name: string;
  fn: () => void;
  status: TestStatus;
};

export type VoidFunction = () => void;

export type Suite = {
  name: string;
  hooks: {
    before: {
      all: VoidFunction;
      each: VoidFunction;
    };
    after: {
      all: VoidFunction;
      each: VoidFunction;
    };
  };
  tests: TestFunction[];
  cb: VoidFunction;
};
