'use strict'
const split = require('split');
const through2 = require('through2');
let lineCounter = 0;

const write = function (buffer, encoding, next) {
    lineCounter++;

    if (lineCounter % 2 === 0) {
        this.push(buffer.toString().toUpperCase()+'\n');
    } else {
        this.push(buffer.toString().toLowerCase()+'\n');
    }

    next();
};

const end = (done) => {
    done();
};

const stream = through2(write, end);

process.stdin
    .pipe(split())
    .pipe(stream).pipe(process.stdout);
