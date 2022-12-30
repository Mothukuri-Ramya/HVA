
var fs = require('fs');
//for deleting particular file

fs.unlink('c.txt', (err => {
    if (err) console.log(err);
    else {
      console.log("\nDeleted file: c.txt");
    }
    }));
    //for creating directory
fs.mkdirSync('new_dir');
/*for deleting directory
fs.rmdirSync('new_dir');
*/
/* to create files asynchronuosly we have to use call back functions
fs.mkdir('dir',function(){
    fs.readFile('a.txt','utf8',function(err,data){
        fs.writeFile('./dir/c.txt',data);
    });
    });
    */


