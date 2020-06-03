'use strict'
const http = require('http');
const async = require('async');
const url = process.argv[2];
const url2 = process.argv[3];

const doResuest = (url, cb) => {
    http.get(url, (res) => {
        let body = '';
        res.on('data', (chunk) => {
            body += chunk.toString();
        });
        res.on('end', () => {
            cb(null, body);  
        });
    }).on('error', (err) => {
        cb(err);
    });
}

async.series({
    requestOne: (cb) => {
        doResuest(url, cb);
    },
    requestTwo: (cb) => {
        doResuest(url2, cb);
    }
}, (err, result) => {
    if (err) {
        return console.error(err);
    }

    console.log(result);
});
