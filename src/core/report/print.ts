import { Config, TestStatus } from '../../types';
import { count } from './count';
import { log } from './log';

export const summary = (easy: Config) => {
  const failed = count(easy.group, TestStatus.Fail);
  log('Test summary:\n');
  log(`  Success: ${count(easy.group, TestStatus.Success)}`);
  log(`  Fail: ${failed}`);
  log(`  Disabled: ${count(easy.group, TestStatus.Disabled)}\n\n`);

  if (failed > 0) {
    process.exit(1);
  } else {
    process.exit(0);
  }
};
