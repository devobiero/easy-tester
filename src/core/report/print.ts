import { Config, TestStatus } from '../../types';
import { repeat } from '../../utils';
import { count } from './count';
import { log } from './log';

export const summary = (easy: Config) => {
  log(`\n${repeat('.', 60)}\n`);

  for (const group of easy.group) {
    log(`📥 ${group.name}`);
    for (const t of group.tests) {
      if (t.status === TestStatus.Success) {
        log(`${repeat(' ', 4)} ✅ ${t.name}`);
      } else if (t.status === TestStatus.Fail) {
        log(`${repeat(' ', 4)} ❌ ${t.name}`);
      }
    }
  }

  const failed = count(easy.group, TestStatus.Fail);

  log(`\n${repeat('.', 60)}\n`);
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
