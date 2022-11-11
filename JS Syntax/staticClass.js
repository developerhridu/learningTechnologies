class Car {
    constructor(name) {
      this.name = name;
    }

    // Function name could not be same with or without a parameter
    static hello(x) {
      return "Hello!!" + x.name;
    }
    static hello2() {
        return "Hello!!";
      }
  }

  let myCar = new Car("Ferrari");
  console.log(myCar);

// You can call 'hello()' on the Car Class
  console.log(Car.hello2()); // Hello!!

  // But Not on a Car object
  //   console.log(myCar.hello());  // Error


//   If you want to use the myCar object inside the static method, you can send it as a parameter:
console.log(Car.hello(myCar));