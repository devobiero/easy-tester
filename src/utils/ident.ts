import { repeat } from './repeat';

const indent = (n: number) => repeat('    ', n);

/**
 * Indents a string with multiple lines
 *
 * @param str
 * @param n
 */
export const indentLines = (str: string, n: number) =>
  indent(n) + str.replace(/\n/g, `\n${indent(n)}`);
