import assert from 'assert';
import path from 'path';
import { log } from '../core';
import { TestFileConfig } from '../types';
import { isDirectory } from './isDirectory';

export const findPath = (config: TestFileConfig) => {
  try {
    const dirPath = path.join(
      // @ts-ignore
      process.mainModule.paths[0].split('node_modules')[0].slice(0, -1),
      config.rootDir,
    );

    assert.ok(isDirectory(dirPath));

    return dirPath;
  } catch (e) {
    log('Core path found...');
    return path.join(__dirname, '../../', config.rootDir);
  }
};
