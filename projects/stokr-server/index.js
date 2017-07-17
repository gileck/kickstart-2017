#!/usr/bin/env node
var program = require('commander');
var server = require('./server').default;

program
  .option('-k, --key <key>', 'Yahoo Finance key', 'dj0yJmk9Q3owTWZUSFpQbzVMJmQ9WVdrOVoxUnFhWGhGTldVbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD0yYg--')
  .option('-s, --secret <secret>', 'Yahoo Finance secret', 'd95b1cdc63a6d4e0ccc61ed21581c06ae30a011b')
  .parse(process.argv);

server.start(program.key, program.secret);
