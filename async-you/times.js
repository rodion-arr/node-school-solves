'use strict'
const http = require('http');
const async = require('async');
const host = process.argv[2];
const port = process.argv[3];
const baseUrl = `http://${host}:${port}`;

const doRequest = (url, cb) => {
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

const userPost = (userId, cb) => {
    const req = http.request({
        method: 'POST',
        hostname: host,
        port: port,
        path: '/users/create'
    }, (res) => {
        res.on('data', () => {
        });
        res.on('end', () => {
            cb(null);
        });
    });

    const body = JSON.stringify({ 'user_id': userId });
    req.write(body);
    req.end();
};

async.series({
    postUsers: (cb) => {
        async.times(5, (n, eachCb) => {
            userPost(++n, (err, response) => {
                eachCb();
            });
        }, (err) => {
            cb(null, 'saved');
        });
    },
    getUsers: (cb) => {
        doRequest(`${baseUrl}/users`, cb);
    }
}, (err, result) => {
    if (err) {
        return console.error(err);
    }

    console.log(result.getUsers);
});
