'use strict'
const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (err, content) => {
    if (err) {
        return console.log(err)
    }

    const lines = content.split('\n');
    console.log(lines.length - 1);
});
