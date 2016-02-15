var fs = require('fs');
var buffer = fs.readFile(process.argv[2], function callback (err, data){
    if(err == null){
       var array = data.toString().split("\n")
        console.log(array.length-1)
    }
});