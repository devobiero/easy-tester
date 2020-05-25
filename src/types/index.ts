export type Config = {
  group: Suite[];
};

declare global {
  namespace NodeJS {
    interface Global {
      expect: any;
      test: (name: string, fn: () => void) => void;
      easy: Config;
    }
  }
}

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

export type DoneCallback = {
  name: string;
  fn: () => void;
  status: TestStatus;
};

export type ProvidesCallback = () => void;

export interface It {
  (name: string, fn: ProvidesCallback): void;
  only(name: string, fn: ProvidesCallback): void;
  skip(name: string, fn: ProvidesCallback): void;
}

export type Hook = {
  before: {
    all: ProvidesCallback;
    each: ProvidesCallback;
  };
  after: {
    all: ProvidesCallback;
    each: ProvidesCallback;
  };
};

export type Constraint = {
  only?: DoneCallback[];
  skip?: DoneCallback[];
};

export type Suite = {
  constraints?: Constraint;
  name: string;
  hooks: Hook;
  tests: DoneCallback[];
  cb: ProvidesCallback;
};
