'use strict'
const fs = require('fs');

fs.readdir(process.argv[2], (err, files) => {
    if (err) {
        throw err;
    }

    for (const fileName of files) {
        if (fileName.indexOf(`.${process.argv[3]}`) > -1) {
            console.log(fileName);
        }
    }
});
