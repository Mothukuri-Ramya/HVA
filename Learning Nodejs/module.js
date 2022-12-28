var counter=function(arr){
    return "there are " + arr.length + " elements in this array";
};
//we can multiple modules here
var adder=function(a,b){
    return `the sum of two numbers is ${a+b}`;
}
var pi=3.14;
//we have to export the module inorder to use that module later in some other file
module.exports.counter=counter;
module.exports.adder=adder;
module.exports.pi=pi;
/*one more method to export files
module.exports={
    counter:counter,
    adder:adder,
    pi:pi
};*/
 /*another method to export modules
module.exports.counter=function(arr){
    return "there are " + arr.length + " elements in this array";
};

module.exports.adder=function(a,b){
    return `the sum of two numbers is ${a+b}`;
}
module.exports.pi=3.14;
*/
