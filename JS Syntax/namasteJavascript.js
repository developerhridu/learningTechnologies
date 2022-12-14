// ---------> Hoisting <------------
console.log("Hoisting");
console.log(x); // undefined
var x = 7;

console.log(x); // 7

// console.log(z); // Uncaught ReferenceError: Cannot access 'z' before initialization
let z = 10;

console.log(myFunc); // undefined
var myFunc = () => {
  console.log("Hello From myFunc");
};

console.log(myFunc); // will return full function
myfunc2(); //Hello from function 2
// console.log(myFunc2())
// error - function can not be console.log without keeping it in a variable
console.log(myfunc2);
function myfunc2() {
  console.log("Hello from function 2");
}

/*
1. Hoisting in JavaScript is a process in which all the Variables, Functions and Class defination are declared BEFORE execution of the code 
3. Variables are initialised to UNDEFINED when they are declared and Function defination is stored AS IT IS.
4. They are declared in Memory Allocation Phase in the Memory Component of Execution Context, so we can use them even BEFORE they are declared.
5. UNDEFINED means Variable has been declared but value is not ASSIGNED but NOT DEFINED means Variables is NOT DECLARED.
6. When we assign Variable to a Function defination, we CAN NOT call this Variable as Function BEFORE declaration as it will behave as Variable with UNDEFINED value.
*/

/* ---------> Function <------------ */
{
  console.log("Function 1:");
  var num = 10;
  a(); // 50
  b(); // 100
  console.log(num); // 10

  function a() {
    var num = 50;
    console.log(num);
  }
  function b() {
    var num = 100;
    console.log(num);
  }
}

{
  console.log("Function 2: ");
  var num = 10;
  a(); // 50
  b(); // 10 - bcz there is no such variable named num2 in the function b(), so Execution Contest will look for the variable in global execution contest
  console.log(num); // 10

  function a() {
    var num2 = 50;
    console.log(num);
  }
  function b() {
    console.log(num);
  }
}

{
  console.log("Function 3: ");

  var num = 10;
  a(); // 50
  b(); // 100
  console.log(num); // 50

  function a() {
    num = 50; // Here num is updated to 10 to 50
    console.log(num);
  }
  function b() {
    var num = 100;
    console.log(num);
  }
}

/* Summary:

1. We learnt how functions work in JS.
2. At first a global execution context is created, which consists of Memory and code and has 2 phases: Memory allocation phase and code execution phase.
3. In the first phase, the variables are assigned "undefined" while functions have their own code.
4. Whenever there is a function declaration in the code, a separate local execution context gets created having its own phases and is pushed into the call stack.
5. Once the function ends, the EC is removed from the call stack.
6. When the program ends, even the global EC is pulled out of the call stack. */

/* ---------> Shortest Code <------------ */

// Empty File

/*
Summary

1. Shortest Program in JS: Empty file. Still, browsers make global EC and global space along with Window object.
2. Global Space: Anything that is not in a function, is in the global space.
3. Variables present in a global space can be accessed by a "window" object. (like window.a)
4. In global space, (this === window) object.
*/

/* ---------> Undefined Vs Not Defined <------------ */

{
  console.log("Undefined Vs Not Defined");

  console.log(n); // undefined
  var n = 10;
  console.log(n); // 10

  n = "Hello World";
  console.log(n); // Hello World
  // console.log(x); // Not Defined
}

/*
Undefined: a variable is 'declared', it has its own placeholder but not having the value of itself 'defined' hence 'undefined' and until the variable has assigned a value, the 'undefined' fills that particular placeholder
and 'undefined' is itself a datatype
(really sorry for referencing with c++ concepts)

Not Defined: This case comes in error where js engine neither find that particular variable nor its placeholder
and cannot find the variable in 1st phase of context (Memory allocation context)

and yes "flexibly typed language" sound pretty good instead of "weakly typed language"
*/

/* ---------> Scope and Lexical Environment <------------ */
{
  console.log("Scope and Lexical Environment");
  function d() {
    e();
    function e() {
      f();
      function f() {
        console.log(m);
      }
    }
  }
  var m = 10;
  d(); // 10
}
/*
Scope: where you can access the value of our function in our code

Lexical environment : the Local memory(Created and goes hand-in-hand with 1st phase of corresponding execution context ) along with Lexical environment with the parent! and every time the lexical environment of the corresponding context is used, it references to its parent Lexical environment

Lexical environment = Local Variable + LE of it's Parrent.

for simply understanding, I will try it as 'an onion example'
see when one layer of onion(a variable) covers the layer inside it, it also covers the inner layers inside that layer and a point on our first layer of onion encloses inner layers our inner layer(variable and function inside the layer) gets covered by our first layer(can access the variable on the context) and the second layer(under first layer) encloses the third layer(innermost layer)still covered by 1st layer(can access the variable on layer)

the Clojure concept starts here
*/

/* ---------> Let & Const - Temporal Dead Zone <------------ */

/*
1. let and const are hoisted but its memory is allocated at other place than window which cannot be accessed before initialisation.
2. Temporal Dead Zone exists until variable is declared and assigned a value.
3. window.variable OR this.variable will not give value of variable defined using let or const.
4. We cannot redeclare the same variable with let/const(even with using var the second time).
5. const variable declaration and initialisation must be done on the same line.
6. There are three types of error: [1] referenceError {given where variable does not have memory allocation} [2] typeError {given when we change type that is not supposed to be changed} [3] syntaxError {when proper syntax(way of writing a statement) is not used}.
7. Use const wherever possible followed by let, Use var as little as possible(only if you have to). It helps avoid error.
8. Initialising variables at the top is good idea, helps shrinks TDZ to zero.
*/

/* ---------> BLOCK SCOPE & Shadowing in JS <------------ */

/*
Q) What is block in JavaScript?
> multiple js statements formed in a group enclosed in brackets and it forms a block

Q) What is need of a block/Grouping?
> JavaScript sometimes expect to run a single statement to run, but we need to run commands with multiple statements which is only possible by block

write a simple function:
// even empty script is perfectly valid js script, what about empty brackets!!
{
 var a = 10;
 let b = 20;
 const c =30; 
}

When a js script get hoisted (a Global Execution Context) gets created 'var' listed towards 'Global environment' and other variables 'let' and 'const' declarations go to the 'Block environment' 

This become especially important when deciding the scope of a particular variable, since b and c are located in 'Block environment' and for a as we know exists in 'Global environment' any statement out of the "Block" can access 'a' ie.  ' Variable in Global environment' and other are not!

so when we understand the extent of Global and local environment variables and their 'Scopes' == Environment that forms the lexical hierarchy of 'Scopes' and 'Scopes' have Levels like 'Scope inside scope'

see script in 7:03

 var a = 100;
{
 var a = 10;
 let b = 20;
 const c =30; 
 console.log(a);
 console.log(b);
 console.log(c);
}
 console.log(a);
 console.log(b);
 console.log(c);

So in block " var a = 10;" influences the value within the block hence  console.log(a); >> 10 and outside of the block 'Variable in Global environment' influences value of a hence console.log(a); >> 100

Illegal shadowing:

let a = 200;
{
 var a =20;
}

as 'var' declaration goes to 'Global environment' and sets in Memory context, it cannot be set using 'Block environment' value Hence:    Uncaught SyntaxError: Identifier 'a' has already been declared

*/

/* ---------> Closure <------------ */

{
  function zz() {
    var b = 900;
    function x() {
      var a = 7;
      function y() {
        console.log(a, b); // 7, 900
      }
      y();
    }
    x();
  }
  zz();
}

/*
Closure :Function bundled with its lexical environment is known as a closure. Whenever function is returned, even if its vanished in execution context but still it remembers the reference it was pointing to. Its not just that function alone it returns but the entire closure and that's where it becomes interesting !

> Uses of Closures:
- Module Design Pattern
- Currying
- Functions like once
- memoize
- maintaining state in async world
- setTimeouts
- Iterators
- and many more...
*/

/* ---------> setTimeout + Closures Interview Question <------------ */

function xx() {
  // for var i, copy of i is refer to the same memory location
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  console.log("Namaste JavaScript");
}
// xx();
/*
Output:
Namaste JavaScript 
6
6
6
6
6
*/

// let has block scope.. every let i create a new i variable
function xxx() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  console.log("Namaste JavaScript");
}
//   xxx();
/*
Output:
Namaste JavaScript 
1
2
3
4
5
*/

function xxx() {
  for (var i = 1; i <= 5; i++) {
    function close(x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    }
    close(i);
  }
  console.log("Namaste JavaScript");
}
// xxx();
/*
Output:
Namaste JavaScript 
1
2
3
4
5
*/

{
  // Function Statement aka Function Declaration
  function a() {
    console.log("a called");
  }
  // Function Expression
  var b = function () {
    console.log(xyz);
  };
  a();
  //   b();
  //   xyz();
  // Anonymous Function
  // function () {
  // }
}

/* ---------> Callback <------------ */

{
  // setTimeout(function () {
  //   console.log("Timmer");
  // }, 5000)
  function x(y) {
    console.log("x");
    y(); // y() is called
  }
  x(function y() {
    console.log("y"); // y() is not call here but somewhere else
  });

  // important interview question - count how many time a button is clicked
  function clickCounter() {
    let counter = 0;
    document
      .getElementById("countClick")
      .addEventListener("click", function () {
        console.log("Button Clicked for ", ++counter, "Times");
      });
  }
  // clickCounter();
}

/*
1. Function that is passed on as argument to another function is called callback function.
2. setTimeout helps turn JS which is singlethreaded and synchronous into asynchronous.
3. Event listeners can also invoke closures with scope.
4. Event listeners consume a lot of memory which can potentially slow down the website therefore it is good practice to remove if it is not used.
*/

/* ---------> Asynchronous JavaScript & EVENT LOOP <------------ */

/*
1. Browser has superpowers that are lent to JS engine to execute some tasks, these superpowers include web API's such as console, location, DOM API, setTimeout, fetch, local storage.
2. Callback functions and event handers are first stored in Web API environment and then transferred to callback queue.
3. Promises and mutation observer are stored in API environment and then transferred to microtask queue.
4. Event loop continuously observes call stack and when it is empty and some task on callback queue, it transfers task to call stack.
5. Micro task is given priority over callback tasks.
6. Too many micro tasks generated can cause Starvation (nit giving time to callback tasks to execute) .
7. Adding addEventListener is expensive
8. fetch() - goes and request an api call and return a promise
9. mircotask queue has higher priority than  callback queue.. all the task come from promises and mutasion observer will be on microtask queue
10. Starvation of the callback queue - 
*/

/* ---------> JS Engine EXPOSED <------------ */

/*
1. JS runtime environment contains all elements required to run JS program.
2. It contains JS engine, set of API's, callback queue, microtask queue, event loop.
3. JS engine is a piece of code.
4. Process includes Code ---> Parsing ---> Compilation -----> Execution.
5. Parsing breaks code into tokens and converts it into AST(Abstract Syntax Tree).
6. Modern JS engine follows JIT compilation, it interprets while it optimises code as much as it can.
7. Execution and Compilation are done together.
8. Execution has Garbage collector and other optimisation such as inlining, copy elusion, inline caching etc.
9. Mark and sweeo algorithm is used for gerbage collection
*/

/* ---------> Higher-Order Functions <------------ */
{
}

/*
First-class functions are JavaScript functions that can behave like variables. They can also be passed as arguments to higher-order functions.

Higher-order functions are functions that return a function or take in a function as an argument.
*/
{
  function x() {
    console.log("Hello From X");
  }

  function y(x) {
    // y is higher order function
    x();
  }
  y(x);

  const radius = [3, 1, 2, 4];
  const area = function (radius) {
    return Math.PI * radius * radius;
  };
  const cicumference = function (radius) {
    return 2 * Math.PI * radius;
  };
  const diameter = function (radius) {
    return 2 * radius;
  };
  const calculate = function (radius, logic) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
      output.push(logic(radius[i]));
    }
    return output;
  };
  console.log(calculate(radius, area));
  console.log(calculate(radius, cicumference));
  console.log(calculate(radius, diameter));
}

/* ---------> Map, filter and reduce  <------------ */
{
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function double(x) {
    return 2 * x;
  }

  function binary(x) {
    return x.toString(2); // return binary number of arr elements
  }
  console.log(arr.map(double));
  console.log(arr.map(binary));

  // filter odd values
  const isOdd = (x) => {
    return x % 2;
  };
  console.log(arr.filter(isOdd));

  // fiter even values
  const isEven = (x) => {
    return x % 2 === 0;
  };
  console.log(arr.filter(isEven));

  // fiter values greater than 6
  const greaterThan6 = (x) =>  x > 6; // valid function
  console.log(arr.filter(greaterThan6));


  // reduce 
  // syntax : array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
  const findMax = arr.reduce(function(max, curr){
    if(curr > max){
      max = curr;
    }
    return max
  }, 0);
  console.log(findMax);

  // find sum of the array using reduce function
  function findSum(acc, curr){
    acc = acc + curr;
    return acc;
  }
  console.log(arr.reduce(findSum, 0));


  // map function
  const users = [
    { firstName: "akshay", lastName: "saini", age: 26},
    { firstName: "donald", lastName: "trump", age: 75},
    { firstName: "elon", lastName: "musk", age: 50 },
    { firstName: "deepika", lastName: "padukone", age: 26},
    ];
    

    // get full name of the users
    const output = users.map((x) => x.firstName + " " + x.lastName);
    console.log(output);

    const output2 = users.map((x) => x.age)
    console.log(output2);

}

/*
1. map method is used when we want transformation of whole array.
2. filter is used when we want to filter the arrar to obtain required value.
3. reduce is used when we want to reduce the array to single value eg (max, min, avg, sum, difference etc).
4. reduce passes two arguments one function(which includes accumulator and initial value as argument itself) and another initial value of accumulator.
*/


console.log(this == global);