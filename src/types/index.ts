export * from './custom';

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

export type VoidFunction = () => void;

export type Suite = {
  name: string;
  file?: string;
  afterEach?: VoidFunction[];
  tests: CallBackFunction[];
  fn: VoidFunction;
};
