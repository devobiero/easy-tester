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

export type FileConfig = DirConfig & { name: string | null };

export type RegexConfig = DirConfig & { testRegex: string | null };

export type Config = FileConfig | RegexConfig;

export function isFileConfig(config: Config): config is Config {
  return (
    (config as FileConfig).name !== undefined &&
    (config as FileConfig).name !== ''
  );
}

export function isRegexConfig(config: Config): config is Config {
  return (
    (config as RegexConfig).testRegex !== undefined &&
    (config as RegexConfig).testRegex !== ''
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
