'use strict'
const fileFilter = require('./mymodule');

fileFilter(process.argv[2], process.argv[3], (err, files) => {
    if (err) {
        throw err;
    }

    for (const fileName of files) {
        console.log(fileName);
    }
});