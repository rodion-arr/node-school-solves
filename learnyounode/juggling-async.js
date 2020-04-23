'use strict'
const http = require('http')
const results = []
let count = 0

function printResults() {
    for (let i = 0; i < 3; i++) {
        console.log(results[i])
    }
}

function httpGet(index) {
    http.get(process.argv[2 + index], function (response) {
        response.setEncoding('utf-8');
        let data = '';

        response.on('data', (chunk) => {
            data += chunk;
        })

        response.on('end', () => {
            results[index] = data;
            count++

            if (count === 3) {
                printResults()
            }
        })
    })
}

for (let i = 0; i < 3; i++) {
    httpGet(i)
}