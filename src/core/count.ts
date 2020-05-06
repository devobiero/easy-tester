import { Status } from '../types';

export const count = (status: Status) => {
  switch (status) {
    case Status.Success:
      // todo: remove ts ignore
      // @ts-ignore
      global.easy.summary.success++;
      break;
    case Status.Fail:
      // @ts-ignore
      global.easy.summary.fail++;
      break;
  }
};

export const getCount = (status: Status) => {
  switch (status) {
    case Status.Success:
      // @ts-ignore
      return global.easy.summary.success;
    case Status.Fail:
      // @ts-ignore
      return global.easy.summary.fail;
    case Status.Disabled:
      // @ts-ignore
      return global.easy.summary.disabled;
  }
};
