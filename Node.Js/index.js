// let sum = 0;
function sumOf(x, y, ...number) {
  return x + y;
}

let num1 = [10, 20];
// console.log(sumOf(50, 100));
console.log(sumOf(...num1));
// console.log(sumOf(50, 100, ...num1));

const num = [10, 20, 30, 40, 50, 60, 70, 80];

let maxVal = Math.max(...num);
console.log(maxVal);

// var array1 = [10, 20, 30, 40, 50];
// var array2 = [...array1, 60, 70, 80];
// console.log(array2);


const arrValue = ['My', 'name', 'is', 'Jack'];

console.log(arrValue);  
console.log(...arrValue);

const val2 = [...arrValue, 'Hridu'];
console.log(...val2);