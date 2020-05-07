import path from 'path';
import { Config } from '../types';

export const findPath = (config: Config) => {
  return path.join(__dirname, '../../', config.rootDir);
};
