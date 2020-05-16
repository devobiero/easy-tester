import {
  configure,
  loadConfig,
  loadFiles,
  run,
  summary,
  validateArgs,
} from '../core';
import { isFileConfig } from '../types';
import { compose, findPath, getFilesRecursively } from '../utils';

global.easy = {
  group: [],
  summary: {
    success: 0,
    fail: 0,
    disabled: 0,
  },
};

const args = process.argv.slice(2);
const config = configure(args);

// switch working dir
const dirPath = findPath(config);

const filterFiles = () => {
  // @ts-ignore
  return isFileConfig(config) ? getFilesRecursively(dirPath, config.name) : getFilesRecursively(dirPath, config.testRegex);
};

const execute = (...fns: any[]) => fns.reduce(compose);

execute(
    summary,
    run,
    loadConfig,
    loadFiles,
    filterFiles,
    validateArgs
)(args);
