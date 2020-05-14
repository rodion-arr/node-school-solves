'use strict'
const reqeust = require('request');

const response = reqeust.post('http://localhost:8099');
process.stdin.pipe(response).pipe(process.stdout);
