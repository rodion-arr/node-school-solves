'use strict'
const http = require('http');
const fs = require('fs');
const async = require('async');
const filePath = process.argv[2];

async.waterfall([
    (cb) => {
        fs.readFile(filePath, {encoding: 'utf-8'}, (err, content) => {
            if (err) {
                return cb(err);
            }
            cb(null, content);
        });
    },
    (url, cb) => {
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
    },
], (err, result) => {
    if (err) {
        return console.error(err);
    }
    console.log(result); 
});
