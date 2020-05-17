import {
  configure,
  loadConfig,
  loadFiles,
  summary,
  run,
  validateArgs,
} from '../core';
import { compose, filterFiles, findPath } from '../utils';

global.easy = {
  group: [],
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
