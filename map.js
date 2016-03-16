var async = require('async');

var anArray = [];

var testObj = {
  'a': '1',
  'b': '2',
  'c': '3'
};

async.forEachOf(testObj, function (elem, key, callback) {
  console.log(elem);

  anArray.push(elem);
  
  return callback(); //<-- the fix. D'oh.
}, function (err) {
  if (err) {
    console.error(err.message);
  }

  console.log("This line should be printed at the end.", anArray);
});