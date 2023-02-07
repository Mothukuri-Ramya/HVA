var fs = require('fs');
var http = require("http");
var server = http.createServer(function(req,res){
    console.log('request was made:' + req.url);
    res.writeHead(200,{'content-type':'application/json'});
    var myObj ={
        name:'RAMYA',
        job:'Student',
        age:20
};
res.end(JSON.stringify(myObj));
});
server.listen(3000,'127.0.0.1');
console.log('listen to port no 3000');

