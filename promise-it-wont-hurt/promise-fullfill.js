'use strict';

const promise = new Promise(function (fulfill, reject) {
    setTimeout(() => {
        fulfill('FULFILLED!');
    }, 300);
});

promise.then((data) => {
    console.log(data);
});
