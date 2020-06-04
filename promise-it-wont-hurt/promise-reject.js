'use strict';

const promise = new Promise(function (fulfill, reject) {
    setTimeout(() => {
        reject(new Error('REJECTED!'));
    }, 300);
});

promise.then(
    null,
    (err) => {
        console.log(err.message);
    }
);
