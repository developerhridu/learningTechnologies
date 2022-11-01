console.log(new Date());
// document.body.innerHTML = "<h1>Today's date is " + today3 + "</h1>";

// document.body.style.backgroundColor = "lightblue";

let p = document.createElement("P");
let t = document.createTextNode("Paragraph text.");
p.appendChild(t);
document.body.appendChild(p);

document.body.style.backgroundColor = "green";

// Get the current timestamp and print it
function chocolate() {
  let iceCream = "chocolate";
  if (iceCream === "chocolate") {
    alert("Yay, I love chocolate ice cream!");
  } else {
    alert("Awwww, but chocolate is my favorite…");
  }
}
// chocolate();

// Sorting
function alphabetizeOceans() {
  // Define oceans variable as a list of strings
  const oceans = ["Pacific", "Atlantic", "Indian", "Antarctic", "Arctic"];

  // Print alphabetized array to the console
  console.log(oceans.sort());
}
alphabetizeOceans();

// Display Possibilities

// 1. getElementById
document.getElementById("write").innerHTML = 5 + 6;
// 2. document.write
document.write(5 + 6);

// 3. window.alert
// window.alert(5 + 6);

// 4. console.log
console.log(5 + 6);

// 5. window.print()

// You can change the elements of a constant array:

// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");
console.log(cars);

// You can create a const object:
const car = { type: "Fiat", model: "500", color: "white" };

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";
console.log(car);

// JS Const hoisting
// alert(x)
// const x = 5;
// Uncaught ReferenceError: Cannot access 'x' before initialization

function operation() {
  let x = 10;
  let y = 3;
  let z = x / y;
  console.log(z);

  //output 3.333
}
operation();

//object as a data type
function stringMethods() {
  let student1 = {
    firstName: "Mizanur",
    lastName: "Hridu",
    Subject: "ECE",
    ID: 1702153,
  };

  let student2 = {
    firstName: "AB",
    lastName: "Hakim",
    Subject: "ECE",
    ID: 1702155,
  };
  console.log(student1);

  //accessing object property
  console.log(student1.ID);

  //adding two ID
  console.log(student1.ID + student2.ID);

  //subtracting two ID
  console.log(student2.ID - student1.ID);

  if (student1.ID % 2 == 1) {
    console.log("ID", student1.ID, "is Odd");
  } else {
    console.log("ID", student1.ID, "is Even");
  }

  // typeof
  console.log(typeof student1.firstName);

  // length method
  console.log(student1.firstName.length);

  //toupper case
  console.log(student1.firstName.toUpperCase());

  // slice()
  console.log(student1.firstName.slice(0, 5));

  // replace()
  console.log(student1.firstName.replace("Mizan", "Juli"));

  // printing two obj at a time- -- in js object are data type
  console.log(student1, student2);
  console.log(student1);
}
stringMethods();

function multiplication(x, y) {
  return x * y;
}
let z = multiplication(10, 4);
console.log(z);
console.log(multiplication(5, 6));
// 30

function stringSearch() {
  let student1 = {
    firstName: "Mizanur",
    lastName: "Hridu",
    Subject: "ECE",
    ID: 1702153,
  };
  let str = "Please Hridu, occurs last occurs test";

  // indexOf()
  // indexOf() method returns the index of (position of) the first occurrence of a string in a string:
  console.log(str.indexOf("occurs"));

  // lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
  console.log(str.lastIndexOf("occurs"));

  //search() method searches a string for a string (or a regular expression) and returns the position of the match
  console.log(str.search("Hridu"));
  
}
stringSearch();

function addition(x, y) {
  return x + y;
}
console.log(addition(6, 10));
console.log(addition(6, "10"));
console.log(addition("6", 10));
// parseInt() parses a string and returns a whole number.
console.log(addition(parseInt("6"), 10));

// array
function array() {
  const person = ["John", "Doe", 46];

  // adding an array element
  person.push("Hridu");
  const person2 = ["Jon", "Dow", 54];
  console.log(person[2] + person2[2]);

  // array is an object in JS
  console.log(typeof person);
  console.log(person.length);

  //for loop
  let text = "<ul>";
  for(let i = 0; i < person.length; i++)
  {
	text += "<li> " + person[i] + "</li>";
  }
  text += "</ul>";
  document.getElementById("person").innerHTML = text;

  // converts an array to a string of (comma separated) array values
  console.log(person.toString());
  person.pop();
  console.log(person);
}
array();

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
