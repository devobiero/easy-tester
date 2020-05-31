import { Suite } from './easy';

export type Config = {
  group: Suite[];
  args: string[];
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
