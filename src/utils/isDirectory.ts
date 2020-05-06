import { statSync } from 'fs';

/**
 * Check if path is a directory
 * @param path
 */
export const isDirectory = (path: any) => statSync(path).isDirectory();
