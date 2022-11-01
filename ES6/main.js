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

for(let x in student)
{
    console.log(student[x]);
}


// replace()
let visit = "Visit Cumilla";
console.log(visit.replace("Cumilla", "Dhaka"));

// Error Handling
function testingError(x)
{
    try {
        if(x > 0 && x < 10)
        {
            throw "Perfect";
        }
        if(isNaN(x)) throw "not a number";
        else
        {
            throw "Enter Number Between 1 - 9"
        }
    }
    catch(err) {
        console.log("input is: ", err);
    }
    finally {
        console.log("Finally!");
    }
}
testingError("sss"); // not a number
testingError(8); // perfect
testingError(50); // Enter Number Between 1 - 9