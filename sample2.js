var async = require('async');

var handler = function(cb)
{
  async.waterfall([
  function(callback) {
    setTimeout(function() {
      console.log('Task 1');
      callback(null);
    }, 1000);
  },
  function(callback) {
    setTimeout(function() {
      console.log('Task 2');
      callback(null);
    }, 1000);
  },
  function(callback) {
    setTimeout(function() {
      console.log('Task 3');
      callback(null);
    }, 1000);
  }
  ], function(error, results) {
    cb(error, results)
  });
}

handler(function(err, results) {
  if(!err) {
    console.log("result=");
    console.log(results);
  }
})
