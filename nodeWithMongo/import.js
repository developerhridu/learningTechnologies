
// const rest= new Map();
// rest.set('name','Classico Italiano');

// const arr=[1,2];
// rest.set(arr,'Test');

// console.log(rest);
// console.log(rest.size);
// console.log(rest.get('name')); //Test

var dt = require('./myDateTime');
// console.log(dt.myDateTime());

let myD = require('./ownModule');


// accessing the full object
console.log(myD.myDetails()); // Full Object

// accessing object property
console.log(myD.myDetails().firstName); // Mizanur Rahman
console.log(myD.myDetails().university); // HSTU


