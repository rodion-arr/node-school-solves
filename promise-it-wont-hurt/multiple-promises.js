'use strict';

const all = (promise, promise2) => {
    return new Promise((fulfill, reject) => {
        let counter = 0;
        const values = [];
        const hadler = (value) => {
            counter++
            values.push(value);
            if (counter > 1) {
                fulfill(values);
            }
        };

        promise.then(hadler);
        promise2.then(hadler);
    });
};

all(getPromise1(), getPromise2())
    .then(console.log)
    .catch((err) => {
        console.log(err.message);
    });