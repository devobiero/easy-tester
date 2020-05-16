import { Suite, Summary } from './index';

declare global {
  namespace NodeJS {
    interface Global {
      expect: any;
      test: (name: string, fn: () => void) => void;
      easy: {
        group: Suite[];
        summary: Summary;
      };
    }
  }
}
