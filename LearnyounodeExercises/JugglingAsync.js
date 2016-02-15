var http = require('http');
var bl = require('bl'); //bufferedList venter på vi har alt dataen med (tror jeg?)

var url = [process.argv[2], process.argv[3], process.argv[4]];
var stuff = [];

for(var i = 0; i < url.length; i++){

    http.get(url[i], function callback (response){
        response.pipe(bl(function(err, data){
            stuff.push(data.toString())
        }))
    });

}

for(var i = 0; i > stuff.length; i++){
    console.log(stuff[i]);
}