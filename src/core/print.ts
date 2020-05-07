import { Status } from '../types';
import { repeat } from '../utils';
import { getCount } from './count';
import { log } from './log';

export const summary = () => {
  log(`\n${repeat('.', 60)}\n`);
  log('Test summary:\n');
  log(`  Success: ${getCount(Status.Success)}`);
  log(`  Fail: ${getCount(Status.Fail)}`);
  log(`  Disabled: ${getCount(Status.Disabled)}\n\n`);

  if (global.easy.summary.fail > 0) {
    process.exit(1);
  } else {
    process.exit(0);
  }
};
