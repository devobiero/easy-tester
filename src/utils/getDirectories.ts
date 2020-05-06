import { readdirSync } from 'fs';
import { join } from 'path';
import { isDirectory } from './isDirectory';

/**
 * Get a list of al directories
 * @param path
 */
export const getDirectories = (path: any) =>
  readdirSync(path)
    .map((name) => join(path, name))
    .filter(isDirectory);
