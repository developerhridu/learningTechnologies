let sum = 0;
for (var i = 0; i <= 10; i++) {
  sum += i;
}
console.log(sum);

// Default parameter values
function add(x = 10, y = 20) {
  return x + y;
}
console.log(add(4, 5));
console.log(add()); // 30
console.log(add(50)); // 50 + 20 = 70

//Rest Parameter
var sum2 = 0;
function addArray(...num) {
  for (var i = 0; i < num.length; i++) {
    sum2 += num[i];
  }
  console.log("sum is: ", sum2);
}
addArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(Array.from("ABCDEFG"));

// For In Loop in Object Properties
let student = { firstName: "MR", lastName: "Hridu", id: 1702153 };

for (let x in student) {
  console.log(student[x]);
}

// replace()
let visit = "Visit Cumilla";
console.log(visit.replace("Cumilla", "Dhaka"));

// Error Handling
function testingError(x) {
  try {
    if (x > 0 && x < 10) {
      throw "Perfect";
    }
    if (isNaN(x)) throw "not a number";
    else {
      throw "Enter Number Between 1 - 9";
    }
  } catch (err) {
    console.log("input is: ", err);
  } finally {
    console.log("Finally!");
  }
}
testingError("sss"); // not a number
testingError(8); // perfect
testingError(50); // Enter Number Between 1 - 9

// this keyword
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this;
  },
};
console.log(person);

let z = "10.5";
let y = parseInt(z);
console.log(y);
console.log(typeof z);
console.log(typeof y);

// forEach() method calls a function (a callback function) once for each array element.
const numbers = [45, 5, 9, 16, 25];

let txt = "";
let sum3 = 0;
numbers.forEach(myFunction);
function myFunction(value, index, array) {
  sum3 += value;
}
console.log(sum3); // 100

// ----> Object
const person3 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

const x = person3;
x.fullName = x.firstName + " " + x.lastName;
x.gender = "Male";
console.log(x.eyeColor);
console.log(person3.lastName);
console.log(x.fullName);
console.log(x.gender);
// blue
// Doe
// John Doe
// male
console.log(x);



// Displaying object using Loop
let txt1 = "";
for (let x in person3) {
  txt1 += person3[x] + " ";
}
console.log(txt1);
// John Doe 50 blue John Doe Male

let x1 = JSON.stringify(person3);
console.log(x1);
// {"firstName":"John","lastName":"Doe","age":50,"eyeColor":"blue","fullName":"John Doe","gender":"Male"}


// ---> Object.defineProperty() 
// Define object
const obj = { counter: 0 };

// Define setters and getters
Object.defineProperty(obj, "reset", {
  get: function () {
    this.counter = 0;
  },
});
Object.defineProperty(obj, "increment", {
  get: function () {
    this.counter++;
  },
});
Object.defineProperty(obj, "decrement", {
  get: function () {
    this.counter--;
  },
});
Object.defineProperty(obj, "add", {
  set: function (value) {
    this.counter += value;
  },
});
Object.defineProperty(obj, "subtract", {
  set: function (value) {
    this.counter -= value;
  },
});

// Play with the counter:
obj.reset;
obj.add = 5;
obj.add = 5;
obj.subtract = 2;
obj.increment;
console.log(obj.counter);
obj.decrement;
console.log(obj.counter);





// This will return "John Doe":
// person.fullName.call(person1);



const myArray = [];
myArray.push(10);
myArray.push(20);
myArray[0] = 100;
console.log(myArray);