import { isFileConfig, TestFileConfig } from '../types';
import { getFilesRecursively } from './getFilesRecursively';

export const filterFiles = (config: TestFileConfig) => {
  // @ts-ignore
  return isFileConfig(config) ? getFilesRecursively(config.rootDir, config.name) : getFilesRecursively(config.rootDir, config.testRegex);
};
