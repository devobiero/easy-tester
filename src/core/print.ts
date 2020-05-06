import { repeat } from '../utils';
import { log } from './log';

export const summary = () => {
  log(`\n${repeat('.', 60)}\n`);
  log('Test summary:\n');
  log(`  Success: ${global.easy.summary.success}`);
  log(`  Fail: ${global.easy.summary.fail}`);
  log(`  Disabled: ${global.easy.summary.disabled}\n\n`);

  if (global.easy.summary.fail > 0) {
    process.exit(1);
  } else {
    process.exit(0);
  }
};
