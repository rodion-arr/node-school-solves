'use strict'
const http = require('http');

const port = process.argv[2];

const server = http.createServer(function (req, res) {
    if (req.method !== 'GET') {
        return res.end('only GET accepted\n');
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    const query = new URL(`http://localhost${req.url}`).searchParams;
    const date = new Date(query.get('iso'));

    if (req.url.indexOf('/api/parsetime') !== -1) {
        return res.end(JSON.stringify({
            'hour': date.getHours(),
            'minute': date.getMinutes(),
            'second': date.getSeconds()
        }));
    } else if (req.url.indexOf('/api/unixtime') !== -1) {
        return res.end(JSON.stringify({
            'unixtime': date.getTime()
        }));
    } else {
        res.statusCode = 404;
        return res.end(JSON.stringify({ status: 'Not found' }));
    }
});

server.listen(port);