import { Status } from '../types';

export const count = (status: Status) => {
  switch (status) {
    case Status.Success:
      global.easy.summary.success++;
      break;
    case Status.Fail:
      global.easy.summary.fail++;
      break;
  }
};
