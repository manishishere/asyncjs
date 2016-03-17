var async = require('async');
var fs=require('fs');
async.sortBy(['sample.js','sample1.js'], function(file, callback){
    fs.stat(file, function(err, stats){
        callback(err, stats.mtime);
    });
}, function(err, results){
    // results is now the original array of files sorted by
    // modified date
    console.log(results);
});