import path from 'path';
import { Config } from '../types';

export const findPath = (config: Config) => {
  return path.join(
    // @ts-ignore
    process.mainModule.paths[0].split('node_modules')[0].slice(0, -1),
    config.rootDir,
  );
};
