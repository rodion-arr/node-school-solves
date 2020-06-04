'use strict';

const promise = new Promise(function (fulfill, reject) {
    fulfill('I FIRED');
    reject(new Error('I DID NOT FIRE'));
});

promise.then(
    console.log,
    (err) => {
        console.log(err.message);
    }
);
