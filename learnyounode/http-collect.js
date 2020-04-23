'use strict'
const http = require('http');

http.get(process.argv[2], (response) => {
    response.setEncoding('utf-8')
    let data = '';

    response.on('data', (chunk) => {
        data += chunk;
    })

    response.on('end', (chunk) => {
        console.log(data.length);
        console.log(data);
        
    })
});