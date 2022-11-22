function xx() {
  // for var i, copy of i is refer to the same memory location
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  console.log("Namaste JavaScript");
}
// xx();
let i = 10;
console.log(i);
{
  let i = 100;
  console.log(i);
}
