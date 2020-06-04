'use strict';

const promise = Promise.reject(new Error('message'));

promise.then(console.log)
    .catch((err) => {
        console.log(err.message);
    });