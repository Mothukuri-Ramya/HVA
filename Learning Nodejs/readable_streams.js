/*
-->writable streams -allow node js to write data to a stream
-->Readable streams - allow node js to read data from a stream
-->Duplex - can read and write to a stream
*/
var http = require('http');
var fs=require('fs');
var myReadStream = fs.createReadStream(__dirname + '/a.txt','utf8');
myReadStream.on('data',function(chunk){
    console.log('new chunk received:');
    console.log(chunk);
});