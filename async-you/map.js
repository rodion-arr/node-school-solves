'use strict'
const http = require('http');
const async = require('async');
const url = process.argv[2];
const url2 = process.argv[3];

async.map(
    [url, url2],
    (item, cb) => {
        http.get(item, (res) => {
            let data = '';
            res.on('data', function(chunk){
                data += chunk.toString();
            });
            res.on('end', () => {
                cb(null, data);
            });
        }).on('error', (err) => {
            cb(err);
        });
    },
    (err, result) => {
        if (err) {
            return console.error(err);
        }
        console.log(result);
    }
);
