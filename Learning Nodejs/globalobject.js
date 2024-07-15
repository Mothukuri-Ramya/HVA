/*global objects are built in objects that are part of javascript can be used directly in the application
 without importing any particular modules.
 some of the global objects are 
 setTimeout
 setInterval*/
 /*if we want to know current directory we have following command*/
 console.log(__dirname);
 /*for file name*/
 console.log(__filename);
 /*setTimeout(function(){
    console.log('3 seconds have passed');
 },3000);*/
 var time=0;
 var timer=setInterval(function(){
    time+=2;
    console.log(time+ 'seconds have passed');
    if(time>3){
        clearInterval(timer);
    }
 },2000);