import { Config, Status } from '../../types';
import { repeat } from '../../utils';
import { getCount } from './count';
import { log } from './log';

export const summary = (easy: Config) => {
  log(`\n${repeat('.', 60)}\n`);

  for (const group of easy.group) {
    log(`📥 ${group.name}`);
    for (const t of group.tests) {
      try {
        if (t.name) {
          log(`${repeat(' ', 4)} ✅ ${t.name}`);
        }
      } catch (e) {
        log(`❌ ${t.name}`);
      }
    }
  }

  log(`\n${repeat('.', 60)}\n`);

  log('Test summary:\n');
  log(`  Success: ${getCount(Status.Success)}`);
  log(`  Fail: ${getCount(Status.Fail)}`);
  log(`  Disabled: ${getCount(Status.Disabled)}\n\n`);

  if (easy.summary.fail > 0) {
    process.exit(1);
  } else {
    process.exit(0);
  }
};
