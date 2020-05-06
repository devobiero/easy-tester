#!/usr/bin/env node

// if spec.ts regexPattern is passed
// check if ts-node package is registered
// if not exit with an error message

require('ts-node').register();

require('../dist/cli').run();
