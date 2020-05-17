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
  files?: any[];
};

export type FileNameConfig = DirConfig & { name: string | null };

export type RegexConfig = DirConfig & { testRegex: string | null };

export type TestFileConfig = FileNameConfig | RegexConfig;

export function isFileConfig(config: TestFileConfig): config is TestFileConfig {
  return (
    (config as FileNameConfig).name !== undefined &&
    (config as FileNameConfig).name !== ''
  );
}

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
