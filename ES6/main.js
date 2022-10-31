

let sum = 0;
for (var i = 0; i <= 10; i++)
{
    sum += i;
}
console.log(sum);

// Default parameter values
function add(x = 10, y = 20) {

    return x +  y;
}
console.log(add(4, 5));
console.log(add()); // 30
console.log(add(50)); // 50 + 20 = 70


//Rest Parameter
var sum2 =  0;
function addArray(...num)
{
    for (var i = 0; i < num.length; i++)
    {
        sum2 += num[i];
    }
    console.log("sum is: ",sum2);
}
addArray(1,2, 3, 4, 5, 6, 7, 8, 9, 10);


console.log(Array.from("ABCDEFG"));

