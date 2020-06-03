'use strict'
const http = require('http');
const async = require('async');
const url = process.argv[2];

let lastResult = '';
let counter = 0;
async.whilst(
    (cb) => {
        cb(null, lastResult !== 'meerkat');
    },
    (cb) => {
        counter++;
        http.get(url, (res) => {
            let body = '';
            res.on('data', (chunk) => {
                body += chunk.toString();
            });
            res.on('end', () => {
                lastResult = body;
                cb(null, body);
            });
        }).on('error', (err) => {
            cb(err);
        });
    },
    (err, n) => {
        if (err) {
            console.error(err);
        }
        console.log(counter);
    }
);
