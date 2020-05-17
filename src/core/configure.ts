import { TestFileConfig } from '../types';

export const configure = (args: string[]) => {
  return args.reduce((config, arg) => {
    const parts = arg.split('=');
    if (parts.includes('--rootDir')) {
      config.rootDir = parts[1];
    }

    if (parts.includes('--testRegex')) {
      config.testRegex = parts[1];
    }

    if (parts.includes('--file')) {
      config.fileName = parts[1];
    }
    return config;
  }, {} as TestFileConfig);
};
