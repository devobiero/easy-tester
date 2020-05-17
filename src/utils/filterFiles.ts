import { DirConfig } from '../types';
import { getFilesRecursively } from './getFilesRecursively';

export const filterFiles = (config: DirConfig) => {
  return config.fileName
    ? getFilesRecursively(config.rootDir, config.fileName)
    : getFilesRecursively(config.rootDir, config.testRegex);
};
