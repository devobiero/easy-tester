import { DoneCallback, Suite, TestStatus } from '../../types';

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
