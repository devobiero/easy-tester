import { CallBackFunction } from '../types';

export const beforeEach = (cb: CallBackFunction) => {
  console.log(cb);
};
