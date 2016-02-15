var fs = require('fs');

var buffer = fs.readdir(process.argv[2].toString(), function callback (err, list){
    if(err == null){
        for(var i = 0; i < list.length; i++){
            var fileextension = list[i].split(".");
            if(fileextension[1] == process.argv[3]){
                console.log(list[i].toString())
            }
        }
    }
});