'use strict'
const fs = require('fs');

const content = fs.readFileSync(process.argv[2]).toString();
const lines = content.split('\n');

console.log(lines.length - 1);
