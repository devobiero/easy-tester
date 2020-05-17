export const configure = (args: string[]) => {
  return args.reduce((config: any, arg) => {
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
    return config;
  }, {});
};
