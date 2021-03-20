// Variable (ตัวแปร)
// คำแนะนำ: js es2015 ขึ้นไปจะใช้ 'let' และ 'count'


var msgHello = 'Hello';
msgHello = 'hello';

let msgHi = 'Hi';
msgHi = 'hi'

// ตัวแปรแบบ Constant (เปลียนแปลงค่าไม่ได้)
const msgHey = 'Hey';

console.log(msgHello);
console.log(msgHi);
console.log(msgHey);

// ความแตกต่างระหว่าง var และ let คือ 'var' สามารถเรียกใช้งานนอก block ได้ แต่ 'let' ไม่ได้
// ตัวอย่าง: 
/* if (true) {
  var a1 = 'cat';
  let a2 = 'rat';
}

console.log(a1);
console.log(a2); */


// ประเภทข้อมูลตัวแปล
// 1. String --> 'hello', "hello", `hello`
let str = 'goku';

console.log('var str is ' + str);
console.log('var str type is', typeof str);

// 2. Number --> 5, 6.01
let num = 12345;
console.log('var num is', num);
console.log('var num type is', typeof num);

// 3. Boolean --> true / false
let bool = true;
console.log('var bool is', bool);
console.log('var bool type is', typeof bool);

// 4. Object --> {}, []
let obj = {
    name: 'honda',
    color: 'white'
};

console.log('var obj is', obj);
console.log('var obj type is', typeof obj);
console.log('car name', obj.name);
console.log('car color', obj.color);

// Array ใน Js จะจัดอยู่ในประเภทข้อมูล Object
let arr = ['red', 'black', 'green'];
console.log('var arr is', arr);
console.log('var arr type is', typeof arr);
console.log('var arr type is Array', arr instanceof Array);

console.log(arr[0]);

arr.push('orange');
console.log(arr);