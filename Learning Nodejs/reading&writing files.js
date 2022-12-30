var fs=require('fs');
var a =  fs.readFileSync('a.txt','utf8');
console.log(a);
fs.writeFileSync('b.txt',a);


/*
aynchronus creation of files is much quicker than synchronous
var fs=require('fs');
fs.readFile('a.txt','utf8',function(err, data){
   fs.writeFile('c.txt', data,function(err,result){
    if(err)
    console.log('error',err);
   });
});
*/


