/**
 * Repeats a string n times
 * @param str
 * @param n
 */
export const repeat = (str: string | undefined, n: number) =>
  Array(n).join(str);
