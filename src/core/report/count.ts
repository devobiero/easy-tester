import { Status } from '../../types';

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

export const getCount = (status: Status) => {
  switch (status) {
    case Status.Success:
      return global.easy.summary.success;
    case Status.Fail:
      return global.easy.summary.fail;
    case Status.Disabled:
      return global.easy.summary.disabled;
  }
};
