import { log } from './log';

export const validateArgs = (args: string[]) => {
  let noDirSupplied = true;
  args.forEach((arg) => {
    const parts = arg.split('=');
    if (parts.includes('--rootDir')) {
      noDirSupplied = false;
    }
  });

  if (noDirSupplied) {
    log(`❌ --rootDir option is required`);
    process.exit(1);
  }

  return args;
};
