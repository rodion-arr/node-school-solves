'use strict'
const trumpet = require('node-trumpet2');
const through = require('through2');
const tr = trumpet();

const classStream = tr.select('.loud').createStream();
classStream.pipe(through(function (data, _, next) {
  this.push(data.toString().toUpperCase());
  next();
})).pipe(classStream);

process.stdin.pipe(tr).pipe(process.stdout);
