export const compose = (f: any, g: any) => (...args: any) => f(g(...args));
