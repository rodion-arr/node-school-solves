'use strict';
const fs = require("fs");

const peach = function (obj) {
  console.trace('traced');
  console.log(obj);
};

var bowser = function (callback) {
  fs.readFile(process.argv[2], {encoding : "utf8"}, callback);
};

var koopa = function (error, file) {
  if (error) {
      console.error(error);
  }

  peach(JSON.parse(file));
};

bowser(koopa);
