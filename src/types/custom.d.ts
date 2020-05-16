import { Suite, Summary } from './index';

type Config = {
  group: Suite[];
  summary: Summary;
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
