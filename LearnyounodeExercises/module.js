var fs = require('fs')
var path = require('path')

module.exports = function (dir, fileext, callback){

 fs.readdir(dir, function(err, list){
     if(err){
         return callback(err)
     } else {
         list = list.filter(function(file) { //file er et element i list-arreyet.
             return path.extname(file) === "." + fileext;
         })

     }
callback(null, list);

 })

};


