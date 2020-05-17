import { Suite } from './index';

type Config = {
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
