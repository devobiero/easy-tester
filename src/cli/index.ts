import {
  configure,
  loadConfig,
  loadFiles,
  run,
  summary,
  validateArgs,
} from '../core';
import { compose, filterFiles, findPath } from '../utils';

global.easy = {
  group: [],
  summary: {
    success: 0,
    fail: 0,
    disabled: 0,
  },
};

const args = process.argv.slice(2);

const execute = (...fns: any[]) => fns.reduce(compose);

execute(
  summary,
  run,
  loadConfig,
  loadFiles,
  filterFiles,
  findPath,
  configure,
  validateArgs,
)(args);
