// A callback is a function passed as an argument to another function.

function myDisplay(x){
    console.log(x);
}

function myAddtion(x, y, myCallback){
    let sum = x + y;
    myDisplay(sum);  // 15
    myCallback(sum); // 15
}

myAddtion(5, 10, myDisplay);