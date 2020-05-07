#!/usr/bin/env node

const { isTS } =  require("../dist/utils");
const { log } = require("../dist/core");

const args = process.argv.slice(2);

if (isTS(args)) {
  try {
    require('ts-node').register();
  } catch (e) {
    log('❌ ts-node is missing');
    process.exit(1);
  }
}

require('../dist/cli').run();
