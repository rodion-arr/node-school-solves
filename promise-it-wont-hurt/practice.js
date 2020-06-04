'use strict';
const http = require("q-io/http");
const sessionUrl = 'http://localhost:7000';
const dbUrl = 'http://localhost:7001';

const queryDb = (user) => {
    return http.read(`${dbUrl}/${user}`)
}

http.read(sessionUrl)
    .then(queryDb)
    .then((userObj) => {
        console.log(JSON.parse(userObj));
    })
    .catch((err) => {
        console.log(err.message);
    });
