var http = require('http');
var bl = require('bl'); //bufferedList venter på vi har alt dataen med (tror jeg?)

var url = process.argv[2];

http.get(url, function callback (response){
    response.pipe(bl(function(err, data){
        console.log(data.toString().length)
        console.log(data.toString())
    }))
});