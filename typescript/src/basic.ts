// Basic Types
// ดู Types ทั้งหมดได้ที่ https://www.typescriptlang.org/docs/handbook/basic-types.html

// String
let fullName: string = `Bob Bobbington`;

// Number
let age: number = 37;

// Boolean
let isDone: boolean = false;

// Array
let list: number[] = [1, 2, 3];
// let list: Array<number> = [1, 2, 3];

// Object
let o: object = {};
let o2: { name: string } = { name: "gg" };

// Tuple
let x: [string, number] = ["hello", 10];

// Enum
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Blue;

let cc: "a" | "b" | "c" = "a";

// Any
let looselyTyped: any = 4;

// Custom type
type Car = {
  name: string;
  color: string;
  price?: number
};

let car: Car = {
  name: "honda",
  color: "red",
};

// การสร้าง type ด้วย interface ต่างกับ type คือ interface สามารถเป็นแม่แบบของ class ได้
interface Phone {
  name: string;
  color: string;
}

let iphone: Phone = {
  name: "iphone 6",
  color: "black",
};

// Functional
// type default ของ return function คือ any
function sayHello(message: string): void {
    console.log(message);
}

function getCar(): object {
  return {
    name: "nisson",
    color: "white",
  };
}
