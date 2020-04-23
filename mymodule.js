'use strict'
const fs = require('fs');

module.exports = (dirName, searchExtension, cb) => {
    fs.readdir(dirName, (err, files) => {
        if (err) {
            return cb(err, null);
        }

        const filesFiltered = files.filter((fileName) => {
            if (fileName.indexOf(`.${searchExtension}`) > -1) {
                return fileName;
            }
        });
    
        return cb(null, filesFiltered);
    });
};
