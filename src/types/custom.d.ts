import { CallBackFunction} from './index';

declare global {
  namespace NodeJS {
    interface Global {
      expect: any;
      test: (name: string, fn: () => void) => void;
    }
  }
}
