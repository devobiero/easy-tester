import assert from 'assert';
import { readdirSync, statSync } from 'fs';
import path, { join } from 'path';
import { log } from '../core';
import { DirConfig, TestFileConfig } from '../types';

export const filterFiles = (config: DirConfig) => {
  return config.fileName
    ? getFilesRecursively(config.rootDir, config.fileName)
    : getFilesRecursively(config.rootDir, config.testRegex);
};

export const findPath = (config: TestFileConfig) => {
  try {
    const dirPath = path.join(
      // @ts-ignore
      process.mainModule.paths[0].split('node_modules')[0].slice(0, -1),
      config.rootDir,
    );

    assert.ok(isDirectory(dirPath));
    config.rootDir = dirPath;
    return config;
  } catch (e) {
    log('Core path found...');
    config.rootDir = path.join(__dirname, '../../', config.rootDir);
    return config;
  }
};

/**
 * Get a list of al directories
 * @param file
 */
export const getDirectories = (file: string) =>
  readdirSync(file)
    .map((name) => join(file, name))
    .filter(isDirectory);

/**
 * Read dir and get all the files
 * @param fileName
 * @param testRegex
 */
export const getFiles = (fileName: string, testRegex: string) =>
  readdirSync(fileName)
    .map((name) => join(fileName, name))
    .filter(isFile)
    .filter((file) => isTestFile(file, testRegex));

/**
 * Get all files
 * @param dir
 * @param testRegex
 */
export const getFilesRecursively = (dir: any, testRegex: string) => {
  const dirs = getDirectories(dir);
  const files: any[] = dirs
    .map((d) => getFilesRecursively(d, testRegex)) // go through each directory
    .reduce((a, b) => a.concat(b), []); // map returns a 2d array (array of file arrays) so flatten
  return files.concat(getFiles(dir, testRegex));
};

/**
 * Check if path is a directory
 * @param file
 */
export const isDirectory = (file: string) => statSync(file).isDirectory();

/**
 * Check if path is file
 * @param file
 */
export const isFile = (file: string) => statSync(file).isFile();

/**
 * Check if path contains regex
 * @param file
 * @param testRegex
 */
export const isTestFile = (file: string, testRegex: string) => {
  return new RegExp(testRegex).test(file);
};
