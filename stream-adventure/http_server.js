'use strict'
const http = require('http');
const through = require('through2');

const port = process.argv[2];

const server = http.createServer(function (req, res) {
    req.pipe(through(
            function (buffer, encoding, next) {
                this.push(buffer.toString().toUpperCase());
                next();
            },
            done => done()
        )).pipe(res);
});

server.listen(port);
