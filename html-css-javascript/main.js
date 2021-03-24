document.write("Hi");

// Variable
var notbook = "Asus";
let tablet = "IPad";
const desktop = "Dell";

console.log(notbook);
console.log(tablet);
console.log(desktop);

// string
let str = "goku";

console.log("var str is " + str);
console.log("var str type is", typeof str);

// number
let num = 12345;

console.log("var num is", num);
console.log("var num type is", typeof num);

let bool = false;

console.log("var bool is", bool);
console.log("var bool type is", typeof bool);

// Object
let obj = {
  name: "honda",
  color: "white",
};

console.log("var obj is", obj);
console.log("var obj type is", typeof obj);

console.log("car name", obj.name);
console.log("car color", obj.color);

let arr = ["red", "black", "green"];

console.log("var arr is", arr);
console.log("var arr type is", typeof arr);

// check ว่าเป็น object แบบ array
console.log("var arr type is Array", arr instanceof Array);

console.log(arr[0]);

arr.push("orange");
console.log(arr);

// Operators

console.log("Hello" + " World");

console.log(((1 + 1) * 10) / 2);

let n1 = 8;

++n1;
console.log(n1);

--n1;
console.log(n1);

let n2 = 1;

n2 += 10;
console.log(n2);

n2 -= 3;
console.log(n2);

console.log(1 == 1);
console.log(1 === "1");

console.log(1 != 2);
console.log(2 !== "2");

console.log(2 > 1);
console.log(2 >= 1);

console.log(1 < 2);
console.log(2 <= 2);

console.log(!true);

console.log(true && true);

console.log(false || true);

// Conditions

let score = 50;

if (score == 50) {
  console.log("score is 50");
} else if (score > 60) {
  console.log("score greater than 50");
} else {
  console.log("score is not 50");
}

let name = "Goku";

switch (name) {
  case "Goku":
    console.log("name is goku");
    break;

  case "Goten":
    console.log("name is goten");
    break;

  default:
    console.log("name is gohan");
    break;
}

let n = 2;

console.log(n < 2 ? "n less than 2" : "n greather than or equal 2");

// Loops

for (let i = 0; i < 5; i++) {
  console.log(i);
}

let c = 0;
while (c < 5) {
  console.log(c);

  c += 1;
}

c = 0;
do {
  console.log(c);

  c += 1;
} while (c < 5);

let cars = ["honda", "toyota", "bmw", "nisson"];

for (let index = 0; index < cars.length; index++) {
  let car = cars[index];

  console.log(car);
}

for (let key in cars) {
  let car = cars[key];

  console.log(car);
}

for (let car of cars) {
  console.log(car);
}

cars.forEach(function (car) {
  console.log(car);
});

// Functions

function say(message = "") {
  return message;
}

console.log(say("Hello World"));

const showMessage = (message = "") => {
  return message;
};

console.log(showMessage("hi"));

function sayPromise(message) {
  return new Promise((resolve, reject) => {
    if (!message) {
      return reject(new Error("argument is required"));
    }

    setTimeout(() => {
      return resolve(message);
    }, 2000);
  });
}

sayPromise("hey")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

console.log(">>>>>>>");

async function runPromise() {
  try {
    const result = await sayPromise("hey");
    console.log(result);

    console.log("<<<<<<<<");
  } catch (error) {
    console.log(error);
  }
}

runPromise();

// Object and Classes

let Car = {
  // Properties
  name: "hondar",
  color: "black",

  // Methods
  show() {
    console.log(this.name, "color", this.color);
  },
};

console.log(Car.name);
console.log(Car["color"]);
Car.show();

class Phone {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  show() {
    console.log(this.name, "color", this.color);
  }
}

const iphone = new Phone("iphone6", "white");
console.log(iphone.name);
console.log(iphone.color);
iphone.show();
