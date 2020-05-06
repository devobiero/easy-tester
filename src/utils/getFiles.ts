import { readdirSync } from 'fs';
import { join } from 'path';
import { isFile } from './isFile';
import { isTestFile } from './isTestFile';

/**
 * Read dir and get all the files
 * @param path
 * @param testRegex
 */
export const getFiles = (path: any, testRegex: string) =>
  readdirSync(path)
    .map((name) => join(path, name))
    .filter(isFile)
    .filter((file) => isTestFile(file, testRegex));
