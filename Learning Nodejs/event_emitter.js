var events = require('events');
var util = require('util');
var person = function(name){
    this.name=name;

};
util.inherits(person,events.EventEmitter);
var ramya = new person('ramya');
var divya = new person('divya');
var teju = new person('teju');
var people=[ramya,divya,teju];

people.forEach(function(person){
    person.on('speak',function(msg){
        console.log(person.name  + ' said:' + msg );
    });
});
ramya.emit('speak','hii friends');
teju.emit('speak','i want to marry ');