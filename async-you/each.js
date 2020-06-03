'use strict'
const http = require('http');
const async = require('async');
const url = process.argv[2];
const url2 = process.argv[3];

async.each(
    [url, url2],
    (item, cb) => {
        http.get(item, (res) => {
            res.on('end', () => {
                cb();  
            });
        }).on('error', (err) => {
            cb(err);
        });
    },
    (err) => {
        if (err) {
            return console.error(err);
        }
    }
);
