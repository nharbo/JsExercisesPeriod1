var mymodule = require('./module.js');

var dir = process.argv[2];
var fileext = process.argv[3];

mymodule(dir, fileext, function callback(err, list) {
    if(err == null){
            list.forEach(function(data){
                console.log(data)
            })
        }
    });