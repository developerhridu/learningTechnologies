console.log("Hello, World!");
// let today3 = new Date();
// document.body.innerHTML = "<h1>Today's date is " + today3 + "</h1>";

// document.body.style.backgroundColor = "lightblue";
console.log("Hello");

let p = document.createElement("P");
let t = document.createTextNode("Paragraph text.");
p.appendChild(t);
document.body.appendChild(p);

console.log("Hello");
document.body.style.backgroundColor = "yellow";

// Get the current timestamp and print it to the console
// const now = new Date(); console.log(now);

// let iceCream = "chocolate";
// if (iceCream === "choclate") {
//   alert("Yay, I love chocolate ice cream!");
// } else {
//   alert("Awwww, but chocolate is my favorite…");
// }


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





// You can change the elements of a constant array:

// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");
console.log(cars);


// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";
console.log(car);


// JS Const hoisting
// alert(x)
// const x = 5;
// Uncaught ReferenceError: Cannot access 'x' before initialization

function operation()
{
	let x = 10;
	let y = 3;
	let z = x / y;
	console.log(z);

	//output 3.333
}
operation();

//object as a data type
function obj()
{
	let student1 = {firstName: "Mizanur", lastName: "Hridu", Subject: "ECE", ID: 1702153};

	let student2 = {firstName: "AB", lastName: "Hakim", Subject: "ECE", ID: 1702155};
	console.log(student1);

	//accessing object property
	console.log(student1.ID);

	//adding two ID
	console.log(student1.ID + student2.ID);

	//subtracting two ID
	console.log(student2.ID - student1.ID);

	if(student1.ID % 2 == 1)
	{
		console.log("ID", student1.ID, "is Odd");
	}
	else
	{
		console.log("ID", student1.ID, "is Even");
	}

	// printing two obj at a time- -- in js object are data type
	console.log(student1,student2);



}
obj()

function multiplication(x, y)
{
	return x * y;
}
let z = multiplication(10, 4);
console.log(z);
console.log(multiplication(5,6));
// 30