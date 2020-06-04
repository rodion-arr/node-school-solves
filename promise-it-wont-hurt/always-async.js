'use strict';

const promise = new Promise(function (fulfill, reject) {
    fulfill('PROMISE VALUE');
});

promise.then(
    console.log,
    (err) => {
        console.log(err.message);
    }
);

console.log('MAIN PROGRAM');
