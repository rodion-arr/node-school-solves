'use strict'
const concat = require('concat-stream');
process.stdin.pipe(concat(input => {
    process.stdout.end(input.reverse());
}));
