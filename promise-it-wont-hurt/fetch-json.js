'use strict';
const http = require("q-io/http");
const url = 'http://localhost:1337';

http.read(url)
    .then((json) => {
        console.log(JSON.parse(json));
    })
    .catch((err) => {
        console.log(err.message);
    });
