'use strict';

const alwaysThrows = () => {
    throw new Error('OH NOES');
}

const iterate = (int) => {
    console.log(int);
    return int + 1;
}

const promise = Promise.resolve(iterate(1)).then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(alwaysThrows)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .catch((err) => {
        console.log(err.message);
    });
