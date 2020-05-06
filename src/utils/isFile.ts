import { statSync } from 'fs';

/**
 * Check if path is file
 * @param path
 */
export const isFile = (path: any) => statSync(path).isFile();
