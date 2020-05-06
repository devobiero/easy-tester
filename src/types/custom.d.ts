import { CallBackFunction, Summary } from './index';

declare global {
  namespace NodeJS {
    interface Global {
      expect: any;
      test: (name: string, fn: () => void) => void;
      easy: {
        queue: CallBackFunction[];
        summary: Summary;
      };
    }
  }
}
