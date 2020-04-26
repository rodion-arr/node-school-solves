'use strict'
const http = require('http');
const fs = require('fs');

const port = process.argv[2];
const responseFile = process.argv[3];

const server = http.createServer(function (req, res) {
    const fileContent = fs.createReadStream(responseFile, 'utf-8');
    fileContent.pipe(res);
});

server.listen(port);
