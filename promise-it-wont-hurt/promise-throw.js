'use strict';

const parsePromised = json => new Promise((fulfill, reject) => {
    try {
        fulfill(JSON.parse(json));
    } catch (err) {
        reject(err);
    }
});

parsePromised(process.argv[2])
    .then(console.log)
    .catch((err) => {
        console.log(err.message);
    });
