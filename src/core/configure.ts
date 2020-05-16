import { isFileConfig, TestFileConfig } from '../types';

export const configure = (args: string[]): TestFileConfig => {
  const config = {
    rootDir: '',
    name: '',
    testRegex: '',
  };

  args.forEach((arg) => {
    const parts = arg.split('=');
    if (parts.includes('--rootDir')) {
      config.rootDir = parts[1];
    }

    if (parts.includes('--testRegex')) {
      config.testRegex = parts[1];
    }

    if (parts.includes('--file')) {
      config.name = parts[1];
    }
  });

  if (isFileConfig(config)) {
    return {
      rootDir: config.rootDir,
      name: config.name,
    };
  } else {
    return {
      rootDir: config.rootDir,
      testRegex: config.testRegex,
    };
  }
};
