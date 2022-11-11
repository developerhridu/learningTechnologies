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


//this is the callback function
const timeoutCallback = () => {
    console.log("Welcome!")
  }
  
//   setTimeout(timeoutCallback, 3000)
  
function greeting(name) {
    alert(`Hello, ${name}`);
  }
  
function processUserInput(callback) {
    const name = prompt("Please enter your name.");
    callback(name);
  }
  
processUserInput(greeting);