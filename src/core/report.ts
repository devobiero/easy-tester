import { Config, DoneCallback, Suite, TestStatus } from '../types';

export const countByStatus = (allTests: DoneCallback[], status: TestStatus) => {
  return allTests.reduce((total, t) => {
    if (t.status === status) {
      total++;
    }
    return total;
  }, 0);
};

export const count = (group: Suite[], status: TestStatus) => {
  return group.reduce((total, t) => {
    total += countByStatus(t.tests, status);
    return total;
  }, 0);
};

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

export const log = (msg: string) => {
  console.log(msg);
};
