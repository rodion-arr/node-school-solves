'use strict';

const attachTitle = name => `DR. ${name}`;

const promise = new Promise(fulfill => {
    fulfill('MANHATTAN');
});

promise.then(attachTitle)
    .then(console.log);
