import { Config } from '../types';
import { log } from './report';

export const validateArgs = (config: Config) => {
  let noDir = true;
  let noPattern = true;
  for (const arg of config.args) {
    const parts = arg.split('=');
    if (parts.includes('--rootDir')) {
      noDir = false;
    }

    if (parts.includes('--file') || parts.includes('--testRegex')) {
      noPattern = false;
    }
  }

  if (noDir) {
    log(`❌ --rootDir option is required`);
    process.exit(1);
  }

  if (noPattern) {
    log(`❌ --file or --testRegex option is required`);
    process.exit(1);
  }

  return config.args;
};
