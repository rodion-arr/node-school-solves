'use strict'
const http = require('http');
const async = require('async');
const url = process.argv[2];

async.reduce(['one', 'two', 'three'], 0, (memo, item, cb) => {
    http.get(`${url}?number=${item}`, (res) => {
        let body = '';
        res.on('data', (chunk) => {
            body += chunk.toString();
        });
        res.on('end', () => {
            cb(null, memo + new Number(body));
        });
    }).on('error', (err) => {
        cb(err);
    });
}, (err, result) => {
    if (err) {
        console.error(err);
    }

    console.log(result);
});
