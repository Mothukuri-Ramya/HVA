var http=require('http');
var server = http.createServer(function(req,res){
   res.writeHead(200,{'content-Type':'text/plain'});
   res.end('Hey ramya');
});
server.listen(3000,'127.0.0.1');
console.log('hello guys');