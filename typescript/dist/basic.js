"use strict";
// Basic Types
// ดู Types ทั้งหมดได้ที่ https://www.typescriptlang.org/docs/handbook/basic-types.html
// String
var fullName = "Bob Bobbington";
// Number
var age = 37;
// Boolean
var isDone = false;
// Array
var list = [1, 2, 3];
// let list: Array<number> = [1, 2, 3];
// Object
var o = {};
var o2 = { name: "gg" };
// Tuple
var x = ["hello", 10];
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Blue;
var cc = "a";
// Any
var looselyTyped = 4;
var car = {
    name: "honda",
    color: "red",
};
var iphone = {
    name: "iphone 6",
    color: "black",
};
// Functional
// type default ของ return function คือ any
function sayHello(message) {
    console.log(message);
}
function getCar() {
    return {
        name: "nisson",
        color: "white",
    };
}
