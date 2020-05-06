/**
 * Check if path contains regex
 * @param path
 * @param testRegex
 */
export const isTestFile = (path: any, testRegex: string) => {
  return new RegExp(testRegex).test(path);
};
