import { getDirectories } from './getDirectories';
import { getFiles } from './getFiles';

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
