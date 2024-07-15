//we have to import module with the help of file name
var module=require('./module');
console.log(module.counter(['ramya','divya','teju']));
console.log(module.adder(2,4));
console.log(module.adder(module.pi,5));