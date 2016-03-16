var fs=require('fs');
function readFile(filename,callback) {
      fs.readFile(filename,function(err,data){
          if(!err) {
             
                  console.log(data.toString());
              
          }
      });
}
readFile("sample.js");