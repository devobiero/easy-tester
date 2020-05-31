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
  Only,
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

export type BeforeHook = {
  before: {
    all?: ProvidesCallback;
    each?: ProvidesCallback;
  };
};

export type AfterHook = {
  after: {
    all?: ProvidesCallback;
    each?: ProvidesCallback;
  };
};

export type Suite = {
  name: string;
  hooks: BeforeHook & AfterHook;
  tests: DoneCallback[];
  cb: ProvidesCallback;
};

export function isBeforeHook(hook: BeforeHook | AfterHook): hook is BeforeHook {
  return (hook as BeforeHook).before !== undefined;
}

export function isAfterHook(hook: BeforeHook | AfterHook): hook is BeforeHook {
  return (hook as AfterHook).after !== undefined;
}

export type Hook = BeforeHook | AfterHook;
