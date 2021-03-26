# Step-0: Syntax ของ HTML, CSS, Javascript, Typescript

## 1. HTML (HyperText Markup Language)

เป็นภาษาคอมพิวเตอร์ที่ใช้สร้างหน้าเว็บ เวอร์ชันของ HTML ในปัจจุบันเป็นเวอร์ชัน **5** โดยโค้ดของ HTML จะประกอบด้วย Tag ต่างๆ ที่ใช้แตกต่างกันไป โดยจะประกอบด้วยเครื่องหมาย “<>” และชื่อที่อยู่ตรงกลาง Tag โดยสามารถศึกษา Tag ของ HTML ทั้งหมดได้จาก https://www.w3schools.com/html

> **คำชี้แจง:**
>
> Tag ต่าง ๆ ใน HTML เราจะเรียกว่า "Element"

ตัวอย่างเอกสาร HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Page Title</title>
  </head>
  <body>
    <h1>Hello</h1>
  </body>
</html>
```

### Tag ที่ใช้งานบ่อยที่สุด

#### `Comment`

```html
<!-- This is a comment -->
```

#### `Headings` (หัวเรื่อง)

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

#### `Paragraphs` และ `Text Formatting` (ย่อหน้า และ รูปแบบข้อความ)

```html
<p>
  Lorem <b>ipsum</b> <i>dolor</i> <u>sit</u> <sub>amet</sub> consectetur
  <sup>adipisicing</sup> elit. <strong>Distinctio</strong> ab iure
  <small>temporibus quod numquam!</small> Necessitatibus ipsa quae
  <mark>nobis repudiandae</mark> nesciunt unde, ab <del>iure rem</del> ratione
  saepe odit quaerat ipsum placeat.
</p>
```

#### `Links`

```html
<a href="google.com">Google</a>
```

#### `Inputs` (ตัวรับข้อมูล)

```html
<label for="username">username: </label>
<input type="text" id="username" name="username" placeholder="Enter your username" />
<br />

<label for="language">language: </label>
<select id="language" name="language">
  <option>JavaScript</option>
  <option>Python</option>
  <option>C++</option>
</select>
<br />

colors:
<input type="checkbox" id="red" name="color" value="red" />
<label for="red">red</label>
<input type="checkbox" id="black" name="color" value="black" />
<label for="black">black</label>
<br />

animals:
<input type="radio" id="cat" name="animal" value="cat" />
<label for="cat">cat</label>
<input type="radio" id="rat" name="animal" value="rat" />
<label for="rat">rat</label>
```

#### `Buttons` (ปุ่มกด)

```html
<button type="button">this is button</button>
```

#### `Block`

```html
<div>
  <div>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, sed
    aut assumenda eveniet optio quo quam nesciunt mollitia, repellat autem
    cumque repudiandae perspiciatis ab ullam libero officia! Provident,
    voluptate debitis!
  </div>
</div>
```

### Tag ทั้งหมด

https://www.w3schools.com/tags/default.asp

## 2. CSS (Cascading Style Sheets)

เป็นภาษาที่ใช้สำหรับตกแต่งการแสดงผลของเอกสาร HTML ให้มีสีสัน, ขนาด, ระยะห่าง และอื่นๆ ตามที่ต้องการ โดยสามารถศึกษาเพิ่มเติมได้จาก https://www.w3schools.com/css

โค้ดของ CSS สามารถทำงานใน HTML ได้ก็ต่อเมื่อ

1. ใช้ Tag `<link rel="stylesheet" href="ชื่อไฟล์.css" />`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Page Title</title>

    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1 class="text-header1">Heading 1</h1>
  </body>
</html>
```

ไฟล์ `style.css`

```css
.text-header1 {
  color: green;
}
```

2. ใช้ Tag `<style>`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Page Title</title>

    <style>
      .text-header2 {
        color: red;
      }
    </style>
  </head>
  <body>
    <h2 class="text-header2">Heading 2</h2>
  </body>
</html>
```

3. ใช้ Attribute `style`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Page Title</title>
  </head>
  <body>
    <h3 style="color: cadetblue;">Heading 3</h3>
  </body>
</html>
```

### Syntax CSS

```css
[selector] {
  property: value;
}
```

### Selector (อ้างอิงถึง Element)

#### `class`

ใช้ **`.`** ในการอ้างอิงถึง Attribute `class`

```css
.text-header1 {
  color: green;
}
```

```html
<h1 class="text-header1">Heading 1</h1>
```

#### `id`

ใช้ **`#`** ในการอ้างอิงถึง Attribute `id`

```css
#text-header4 {
  color: #000000;
  text-decoration: underline;
}
```

```html
<h4 id="text-header4">Heading 4</h4>
```

#### `Tag`

```css
h5 {
  color: yellow;
}
```

```html
<h5>Heading 4</h5>
```

#### `Attribute`

```css
input[name="username"] {
  background: #d6d1d1;;
}
```

```html
<label for="username">username: </label>
<input
  type="text"
  id="username"
  name="username"
  placeholder="Enter your username"
/>
```

### Properties ทั้งหมด

https://www.w3schools.com/cssref/default.asp

## 3. Javascript

เป็นภาษาคอมพิวเตอร์ สามารถนำมาใช้งานร่วมกับ HTML เพื่อให้เว็บไซต์สามารถตอบสนองผู้ใช้งานได้มากขึ้น ในปัจจุบัน Javascript ได้รับความนิยมอย่างสูง เพราะสามารถนำไปพัฒนา Server Side, Mobile, Desktop และอื่นๆ

โค้ดของ Javascript สามารถทำงานใน HTML ได้ก็ต่อเมื่อ

1. ใช้ Tag `<script></script>`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Page Title</title>
  </head>
  <body>
    <script>
      document.write("Hello World");
    </script>
  </body>
</html>
```

2. ใช้ Tag `<script src="ชื่อไฟล์.js"></script>`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Page Title</title>
  </head>
  <body>
    <script src="main.js"></script>
  </body>
</html>
```

ไฟล์ `main.js`

```js
document.write("Hi");
```

### JavaScript HTML DOM

คือ การเปลียนแปลงเนื้อหาใน Element นั้น เช่น เปลี่ยนข้อความ, เพิ่ม Tag, ซ้อน Element เป็นต้น

สามารถศึกษาได้จาก: https://www.w3schools.com/js/js_htmldom.asp

### Syntax Javascript

#### `Comment`

```js
// text

/*
  text
  text
/*
```

#### `Variables` (ตัวแปร)

keyword สำหรับประกาศตัวแปรใน Javascript มีอยู่ 3 เภท ได้แก่ `var`, `let` และ `const` (ตัวแปรแบบ constant)

```js
var notbook = "Asus";
let tablet = "IPad";
const desktop = "Dell";

console.log(notbook);
console.log(tablet);
console.log(desktop);
```

> **คำแนะนำ:**
>
> - หลักการตั้งชื่อตัวแปร ให้ขึ้นต้นด้วยตัวอักษรพิมพ์เล็ก และถ้าหากมี 2 คำใช้คำถัดไปขึ้นด้วยตัวพิมพ์ใหญ่ เช่น (phoneColor)
>
> - Javascript ES2016 ขึ้นไป ให้ใช้ let และ const เป็นหลัก
>
> - "let" ถ้าตั้งชื่อตัวแปรซ้ำจะ Error

ความแตกต่างระหว่าง var และ let คือ 'var' สามารถเรียกใช้งานนอก block ได้ แต่ 'let' ไม่ได้

ตัวอย่าง:

```js
if (true) {
  var a1 = "cat";
  let a2 = "rat";
}

console.log(a1);
console.log(a2);
```

##### Data Types (ประเภทข้อมูลตัวแปร)

1. `String` --> 'hello', "hello", `hello`

```js
let str = "goku";

console.log("var str is " + str);
console.log("var str type is", typeof str);
```

2. `Number` --> 5, 6.01

```js
let num = 12345;

console.log("var num is", num);
console.log("var num type is", typeof num);
```

3. `Boolean` --> true / false

```js
let bool = true;

console.log("var bool is", bool);
console.log("var bool type is", typeof bool);
```

4. `Object` --> {}, []

```js
let obj = {
  name: "honda",
  color: "white",
};

console.log("var obj is", obj);
console.log("var obj type is", typeof obj);

console.log("car name", obj.name);
console.log("car color", obj.color);
```

Array ใน Javasript จะจัดอยู่ในประเภทข้อมูล Object

```js
let arr = ["red", "black", "green"];

console.log("var arr is", arr);
console.log("var arr type is", typeof arr);

// check ว่าเป็น object แบบ array
console.log("var arr type is Array", arr instanceof Array);

console.log(arr[0]);

arr.push("orange");
console.log(arr);
```

#### `Operators` (เครื่องหมายดำเนินการ)

##### 1 เชื่อมข้อความ

```js
console.log("Hello" + " World"); // => Hello World
```

##### 2 บวก (+), ลบ (-), คูณ (\*), หาร (/)

```js
// ((1 บวก 1) คูณ 10) หาร 10
console.log(((1 + 1) * 10) / 2); // => 10
```

ภาษาคอมพิวเตอร์จะคำนวณตามเครื่องหมาย ดังนั้นเราจึงต้องใส่ () เพื่อให้โปรแกรมคำนวณตามลำดับที่เราต้องการ

##### 3 เพิ่ม (++) / ลด (--)

```js
let n1 = 8;

// เพิ่ม
++n1;
console.log(n1); // => 9

// ลด
--n1;
console.log(n1); // => 8
```

##### 4 Assignment

```js
let n2 = 1;

// เอาข้อมูลเดิมใน 'n2' + 1 และเปลียนค่า
n2 += 10;
console.log(n2); // => 11

// เอาข้อมูลเดิมใน 'n2' - 1 และเปลียนค่า
n2 -= 3;
console.log(n2); // => 8
```

##### 5 เปรียบเทียบ

เท่ากับ

```js
console.log(1 == 1); // => true
```

เท่ากับและดูประเภทข้อมูล

```js
console.log(1 === "1"); // => false
```

ไม่เท่ากับ

```js
console.log(1 != 2); // => true
```

ไม่เท่ากับและดูประเภทข้อมูล

```js
console.log(2 !== "2"); // => true
```

มากกว่า (>)

```js
console.log(2 > 1); // => true
```

มากกว่าหรือเท่ากับ (>=)

```js
console.log(2 >= 1); // => true
```

น้อยกว่า (<)

```js
console.log(1 < 2); // => true
```

น้อยกว่าหรือเท่ากับ (<=)

```js
console.log(2 <= 2); // => true
```

##### Logical

not (!) คือ ไม่เท่ากับ หรือ ตรงกันข้าม

```js
console.log(!true); // => false
```

and (&&) คือ ด้านหน้าและหลัง && ต้องมีค่าเป็น true จึงมีค่าเท่ากับ true

```js
console.log(true && true); // => true
```

or (||) คือ ด้านหน้าหรือหลัง || ต้องมีค่าเป็น true จึงมีค่าเท่ากับ true

```js
console.log(false || true); // => true
```

> **หมายเหตุ:**
>
> เครื่อง Operators มีเยอะมาก เราไม่สามารถเขียนได้หมด สามารถศึกษาเพิ่มเติมได้จาก https://www.w3schools.com/js/js_operators.asp

#### `Conditions` (เงื่อนไข)

##### If-else

```js
let score = 61;

if (score == 50) {
  console.log("score is 50");
} else if (score > 60) {
  console.log("score greater than 50");
} else {
  console.log("score is not 50");
}
```

##### Switch

```js
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
```

> **คำแนะนำ:**
>
> เหมาะกับเงื่อนไขที่ไม่ซับซ้อบ

##### ใช้เครื่องหมาย Operator

```js
let n = 2;

console.log(n < 2 ? "n less than 2" : "n greather than or equal 2");
```

#### `Loops` (การวนซ้ำ)

> **คำแนะนำ:**
>
> - For: ใช้งานเมื่อรู้จำนวนครั้งที่จะวนซ้ำ
>
> - White: ใช้งานเมื่อไม่รู้จำนวนครั้งที่จะวนซ้ำ
>
> - Do-white: ไม่รู้จำนวนครั้งที่จะวนซ้ำ โดยทำก่อน 1 ครั้ง แล้วเช็กเงื่อนไข

##### For

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

##### White

```js
let c = 0;
while (c < 5) {
  console.log(c);

  c += 1;
}
```

##### Do-white

```js
c = 0;
do {
  console.log(c);

  c += 1;
} while (c < 5);
```

##### การนำไปใช้งานกับ Array

```js
let cars = ["honda", "toyota", "bmw", "nisson"];
```

ตัวอย่างที่ 1: ใช้ for แบบดังเดิม

```js
for (let index = 0; index < cars.length; index++) {
  let car = cars[index];

  console.log(car);
}
```

ตัวอย่างที่ 2: ใช้ for in

```js
for (let key in cars) {
  let car = cars[key];

  console.log(car);
}
```

ตัวอย่างที่ 3: ใช้ for of

```js
for (let car of cars) {
  console.log(cars);
}
```

ตัวอย่างที่ 5: ใช้ Method ของข้อมูล

```js
cars.forEach(function (car) {
  console.log(car);
});
```

#### `Functions` (ฟังก์ชัน)

ประโยชน์ของการสร้างฟังก์ชัน คือ ช่วยลดการเขียนโค้ดซ้ำๆ และช่วยให้แก้ไขโค้ดได้ง่ายสะดวกรวดเร็ว เพราะโค้ดอยู่ในที่เดียว

รูปแบบของ Function ใน Javascript มีดังนี้

##### 1. Default

```js
function say() {
  console.log('Hello World');
}

say();
```

ส่ง Parameter ไปยัง function

```js
function say(message = "") {
  return message;
}

console.log(say("hello"));
```

##### 2. Arrow

```js
const showMessage = (message = "") => {
  return message;
};

console.log(showMessage("hi"));
```

##### 3. Promise

นิยมนำมาสร้างฟังก์ชันแบบ Asynchronous และใช้แก้ปัญหา Callback ฟังก์ชัน

```js
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
```

เรียกใช้งานแบบ Asynchronous

```js
sayPromise("hey")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
```

เรียกใช้งานแบบ Synchronous

```js
async function runPromise() {
  try {
    const result = await sayPromise("hey");
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

runPromise();
```

#### `Object and Classes`

เป็นการเขียนโปรแกรมเชิงวัตถุ Object Oriented Programming (OOP) โดยในแต่ละ Object จะประกอบด้วย Properties และ Methods

บทความที่อธิบาย OOP ได้เข้าใจง่าย => https://www.borntodev.com/2020/04/14/oop-จากตัวอย่างที่ง่ายๆ

```js
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
```

##### Classes (ES2015)

```js
function Notbook(name, color) {
  this.name = name;
  this.color = color;
}

Notbook.prototype.show = function () {
  console.log(this.name, "color", this.color);
};

const asus = new Notbook("asus", "black");
console.log(asus.name);
console.log(asus.color);
asus.show();
```

##### Classes (ES2016)

```js
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
```

> **หมายเหตุ:**
>
> ในส่วนของการเขียนโปรแกรมแบบ OOP เราจะไปลงลึกกันใน Typescript เพราะในภาษา Javascript ยังขาดพวก Visibility, Interface, Abstract และอื่นๆ
>
> ถ้าหากสนใจ OOP ใน Javascript สามารถเข้าไปศึกษาได้จาก
>
> https://www.w3schools.com/js/js_class_intro.asp
>
> https://www.w3schools.com/js/js_object_definition.asp

## 4. Node.js

เป็น JavaScript runtime

### Run โค้ด Javascript

ไฟล์ `main.js`

```js
let score = 99;

if (score >= 80) {
  console.log("A");
} else if (score >= 70) {
  console.log("B");
} else if (score >= 60) {
  console.log("C");
} else if (score >= 50) {
  console.log("D");
} else {
  console.log("E");
}
```

คำสั่ง Run

```bash
node main.js
```

### สร้าง Modules

ไฟล์ `showMessage.js`

```js
function showMessage(degree) {
  console.log('I got grade "' + degree + '"');
}

module.exports = showMessage;
```

เรียกใช้งาน Module ในไฟล์ `main.js`

```js
const showMessage = require("./showMessage");

let score = 99;

if (score >= 80) {
  showMessage("A");
} else if (score >= 70) {
  showMessage("B");
} else if (score >= 60) {
  showMessage("C");
} else if (score >= 50) {
  showMessage("D");
} else {
  showMessage("E");
}
```

### ใช้งาน Package ใน npm

สร้างไฟล์ package.json โดยใช้คำสั่ง

```bash
$ npm init
```

หากสำเร็จจะเห็นไฟล์ `package.json`

หา Package ที่ต้องการใช้จาก https://www.npmjs.com โดยตัวอย่างนี้ผมจะใช้ Lodash

```bash
npm install lodash
```

เรียกใช้งาน Lodash ในไฟล์ `main.js`

```js
const _ = require("lodash");
const showMessage = require("./showMessage");

let score = "99";

if (!_.isNumber(score)) {
  console.log('"score" must be a Number');
} else {
  if (score >= 80) {
    showMessage("A");
  } else if (score >= 70) {
    showMessage("B");
  } else if (score >= 60) {
    showMessage("C");
  } else if (score >= 50) {
    showMessage("D");
  } else {
    showMessage("E");
  }
}
```

## 5. Typescript

เป็น Superset ของ JavaScript (หมายความว่าสามารถใช้ทุก feature ของ JavaScript ได้เลย) โดยรูปแบบโค้ดของ Typescript จะมีความคล้ายกับ Javascript ต่างกันตรงที่มี Type ข้อมูล และยังมีคุณสมบัติของการเขียนโปรแกรมแบบ OOP มากกว่า Javascript โดยสามารถศึกษาข้อมูลเพิ่มเติมได้จาก https://www.typescriptlang.org

### ติดตั้ง Typescript ลงในโปรเจค

ก่อนที่จะติดตั้ง Typescript ลงในโปรเจค อย่าลื่มสร้างไฟล์ package.json โดยใช้คำสั่ง `npm init` ก่อนนะครับ

```bash
$ npm install typescript --save-dev
$ npx tsc --init
```

หาก Run คำสั่งดังกล่าวสำเร็จ จะเห็นไฟล์ `tsconfig.json` ให้เปิดไฟล์ดังกล่าวขึ้นมา และทำการ `config` ดังนี้

1. เปิดให้สามารถเรียกใช้งาน Module Javascript ได้

```json
 "allowJs": true,
```

2. ระบุที่อยู่โฟลเดอร์โค้ดตอน Build และโค้ด Typescript

```json
 "outDir": "./dist",
 "rootDir": "./src",
```

### Types

> **คำชี้แจง:**
>
> โค้ด Typescript จะต้อง Build เป็น Javascript เสียก่อน จึงสามารถ Run บน Node.js ได้
>
> คำสั่ง Build โต้ด Typescript คือ `npx tsc`

#### `String`

```ts
let fullName: string = `Bob Bobbington`;
```

#### `Number`

```ts
let age: number = 37;
```

#### `Boolean`

```ts
let isDone: boolean = false;
```

#### `Array`

```ts
let list: number[] = [1, 2, 3];
```

```ts
let list: Array<number> = [1, 2, 3];
```

#### `Object`

```ts
let o: object = {};
let o2: { name: string } = { name: "gg" };
```

#### `Tuple`

```ts
let x: [string, number] = ["hello", 10];
```

#### `Enum`

```ts
enum Color {
  Red,
  Green,
  Blue,
}

let c: Color = Color.Blue;
```

```ts
let cc: "a" | "b" | "c" = "a";
```

#### `Any`

```ts
let looselyTyped: any = 4;
```

สามารถศึกษา Types อื่นๆเพิ่มเติ่มได้จาก https://www.typescriptlang.org/docs/handbook/basic-types.html#boolean

### Custom Types

```ts
type Car = {
  name: string;
  color: string;
  price?: number;
};

let car: Car = {
  name: "honda",
  color: "red",
};
```

```ts
interface Phone {
  name: string;
  color: string;
}

let iphone: Phone = {
  name: "iphone 6",
  color: "black",
};
```

### Functional

return type default ของ function คือ any

```ts
function sayHello(message: string): void {
  console.log(message);
}
```

```ts
function getCar(): object {
  return {
    name: "nisson",
    color: "white",
  };
}
```

### Classes

เป็นซอสโค้ดที่เรามองว่าเป็น Object (วัตถุ) โดย Class ประกอบไปด้วย Properties (คุณสมบัติ) และ Methods (ดำเนินการ)

<span>+</span> **Properties:** ข้อสั่งเกตคือ ประกาศคล้ายกับตัวแปร (name = value)\
<span>+</span> **Methods:** ข้อสั่งเกตคือ ประกาศคล้ายกับฟังก์ชัน (show() {})

**Visibility** คือ การมองเห็น Properties หรือ Methods ใน Class นั้น

<span>+</span> **public:** ภายนอกใช้งานได้\
<span>+</span> **private:** เรียกใช้งานได้เฉพาะภายใน class ตัวเอง\
<span>+</span> **protected:** เรียกใช้งานได้เฉพาะภายใน class ตัวเอง และ class ที่สืบทอด

**Constructor** คือ Method แรกเริ่มที่ทำงานเมื่อเราประการ new ClassName()

**Static** คือ keyword ที่ทำให้เราสามารถเรียกใช้ Properties หรือ Methods ได้ทันทีโดยไม่ต้องประกาศ new ClassName()

> **คำแนะ:**
>
> การตั้งชื่อ Class ควรขึ้นต้นด้วยตัวพิมพ์ใหญ่ 
>
> และใน 1 ไฟล์ควรมีแค่ 1 Class เท่า จะทำง่ายเมื่อแก้ไข เพราะโค้ดจัดเรียงเป็นระบบ และไลดูโค้ดได้ง่าย 

&nbsp;

**ตัวอย่าง:** Class Person(คน)

**Properties:**\
<span>+</span> firstname\
<span>+</span> lastname\
<span>+</span> age\
<span>+</span> secretMsg (private)\
<span>+</span> isWalking (protected)\
<span>+</span> message (static)

**Constructor:** รับ Parameter --> firstname, lastname, age, isWalking

**Method:**\
<span>+</span> walk\
<span>+</span> show\
<span>+</span> show (static)\
<span>+</span> showx (static)

```ts
class Person {
  public firstname: string;
  public lastname: string;
  age: number;
  private secretMsg: string = "Hello"; // ข้อความลับที่ไม่อยากให้ภายนอก class เรียกใช้งานได้
  protected isWalking: boolean = false; // สถานะการเดิน
  static message: string = "Hi";

  constructor(
    firstname: string,
    lastname: string,
    age: number,
    isWalking: boolean = false
  ) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.isWalking = isWalking;
  }

  // เดิน ซึ่งเมื่อเดินแล้วก็จะต้องเซต isWalking เป็น true
  public walk() {
    this.isWalking = true;
    console.log("walking.");
  }

  // แสดงข้อมูล
  public show(): void {
    console.log("firstname:", this.firstname);
    console.log("lastname:", this.lastname);
    console.log("age:", this.age);
    console.log("walking:", this.isWalking ? "Yes" : "No");
    console.log("secret message:", this.secretMsg);
  }

  // แสดงข้อมูล แบบ static
  public static show(
    firstname: string,
    lastname: string,
    age: number,
    isWalking: boolean = false,
    secretMsg: string = "Hello"
  ): void {
    console.log("firstname:", firstname);
    console.log("lastname:", lastname);
    console.log("age:", age);
    console.log("walking:", isWalking ? "Yes" : "No");
    console.log("secret message:", secretMsg);
  }

  // แสดงข้อมูล แบบ static และเรียกใช้งาน method show ใน Class ตัวเอง
  public static showx(
    firstname: string,
    lastname: string,
    age: number,
    isWalking: boolean = false
  ): void {
    let person = new Person(firstname, lastname, age, isWalking);
    person.show();
  }
}

// เรียกใช้งาน class
let tomus = new Person("Tomus", "k", 12);

// ดึงข้อมูลใน propertys
console.log(tomus.firstname);
console.log(tomus.lastname);
console.log(tomus.age);

// console.log(tomus.secretMsg); // Error เพราะ visibility เป็น private
// console.log(tomus.isWalking); // Error เพราะ visibility เป็น protected

// เซตค่าใน propertys
tomus.firstname = "Tom";
console.log(tomus.firstname);

// เรียกใช้งาน methods
tomus.show();
tomus.walk();

// เรียกใช้งาน static property
console.log(Person.message);

// เรียกใช้งาน static methods
Person.show("Sara", "t", 15, true);
Person.showx("Silva", "x", 13);
```

#### Inheritance (การสืบทอดคุณสมบัติ)

```ts
class Animal {
  public name: string = "";
  public color: string = "";

  private s: string = "#=@";

  protected isWalking: boolean = false;

  constructor() {
    console.log('initialed class "Animal"');
  }

  public walk(): void {
    this.isWalking = true;
    console.log(this.color + " " + this.name + " is walking.");
  }

  public show(): void {
    console.log("name:", this.name);
    console.log("color:", this.color);
    console.log("walking:", this.isWalking);
  }
}

class Cat extends Animal {
  public name: string = "cat";

  constructor(color: string) {
    super(); // เรียกใช้งาน constructor ของ class parent

    this.color = color;
  }

  checkWalking() {
    console.log("wolking status: " + this.isWalking ? "Yes" : "No");
  }
}

let cat = new Cat("Black");
console.log(cat.name);
console.log(cat.color);
cat.walk();
cat.checkWalking();

let rat = new Animal();
rat.name = "rat";
rat.color = "white";
rat.walk();
```

#### Interface (แม่แบบ)

เป็นแม่แบบ Class ถ้าหากมี Propertys หรือ Methods ไม่ตรงกับแม่แบบจะเกิด Error การเรียกใช้งาน Interface ใน Class ใช้ keyword `implements`

```ts
interface IPhone {
  name: string;
  color: string;

  playMusic(name: string): void;
}

class IPhone5s implements IPhone {
  name = "iPhone 5s";
  color = "black";

  playMusic(name: string) {
    console.log(this.name + "play song name " + name);
  }

  show() {
    console.log("name:", this.name);
    console.log("color:", this.color);
  }
}

let iphone5s = new IPhone5s();
iphone5s.playMusic("Hello");
iphone5s.show();
```

#### Abstract (แม่แบบที่สามารถใส่โค้ด Logic ได้)

```ts
abstract class Android {
  abstract getVersion(): number;

  printVersion() {
    console.log("Hello, " + this.getVersion());
  }
}

class Sumsung extends Android {
  name = "sumsung";
  version = 10;

  getVersion() {
    return this.version;
  }
}

let sumsung = new Sumsung();
sumsung.getVersion();
```

### Modules

การสร้าง Module ใน Typescript ก็จะเหมือนกับการสร้าง Module ใน Javascript ES2016

ไฟล์ `logger.ts`

```ts
export default function logger(message: string): void {
  console.log({
    message,
    timestam: (new Date()).toISOString()
  });
}

export function info(param: any): void {
  console.info('info:', param);
}

export function debug(param: any): void {
  console.debug('debug:', param);
}

export const logs = ["info", "debug"];
```

ไฟล์ `main.ts`

```ts
import logger, { info, debug, logs } from './logger';

logger('Hello');

info('Hi');

debug('Hey')

console.log(logs);
```

> **คำอธิบายเพิ่มเติม:**
>
> การใช้งาน Package ใน npm จะเหมือนกับ Node.js แต่ควรใช้การ import Package แบบ Javascript ES2016
