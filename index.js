#! /usr/bin/env node

"use strict";
const R = require('ramda');

const fs = require('fs');
const path = require('path');

const testDir = './test-data';

const fullPath = filename => path.join(testDir, filename);
const onlyJs = R.filter(file => file.substr(-3) === '.js');
const files = R.pipe(fs.readdirSync, onlyJs, R.map(fullPath))(testDir);

const runMocha = require('./runMocha');

runMocha(files)
  .then(console.log)
  .catch(console.log);
