# Step-0: Syntex ของ HTML, CSS, Javascript, Typescript

## 1. HTML (HyperText Markup Language)

HTML เป็นภาษาคอมพิวเตอร์ที่ใช้สร้างหน้าเว็บ เวอร์ชันของ HTML ในปัจจุบันเป็นเวอร์ชัน **5** โดยโค้ดของ HTML จะประกอบด้วย Tag ต่างๆ ที่ใช้แตกต่างกันไป โดยจะประกอบด้วยเครื่องหมาย “<>” และชื่อที่อยู่ตรงกลาง Tag โดยสามารถศึกษา Tag ของ HTML ทั้งหมดได้จาก https://www.w3schools.com/html 


>**คำชี้แจง:** 
>
>Tag ต่าง ๆ ใน HTML เราจะเรียกว่า "Element"


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
  Lorem <b>ipsum</b> <i>dolor</i> <u>sit</u> <sub>amet</sub> consectetur <sup>adipisicing</sup>
  elit. <strong>Distinctio</strong> ab iure <small>temporibus quod numquam!</small> Necessitatibus ipsa quae
  <mark>nobis repudiandae</mark> nesciunt unde, ab <del>iure rem</del> ratione saepe odit quaerat
  ipsum placeat.
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

colors:
<input type="checkbox" id="red" name="color" value="red" />
<label for="red">red</label>
<input type="checkbox" id="black" name="color" value="black" />
<label for="black">black</label>

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
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur,
    sed aut assumenda eveniet optio quo quam nesciunt mollitia, repellat
    autem cumque repudiandae perspiciatis ab ullam libero officia!
    Provident, voluptate debitis!
  </div>
</div>
```

### Tag ทั้งหมด

https://www.w3schools.com/tags/default.asp

## 2. CSS (Cascading Style Sheets)

CSS เป็นภาษาที่ใช้สำหรับตกแต่งการแสดงผลของเอกสาร HTML ให้มีสีสัน, ขนาด, ระยะห่าง และอื่นๆ ตามที่ต้องการ โดยสามารถศึกษาเพิ่มเติมได้จาก https://www.w3schools.com/css


โค้ดของ CSS สามารถทำงานใน HTML ได้ก็ต่อเมื่อ

1. ใช้ Tag `<link rel="stylesheet" href="ชื่อไฟล์.css" />`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Page Title</title>

    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
      <h1 class="text-header1">Heading 1</h1>
  </body>
</html>
```

ไฟล์ `css/style.css`

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
    color: orange;
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
  background: red;
}
```

```html
<label for="username">username: </label>
<input type="text" id="username" name="username" placeholder="Enter your username" />
```

### Properties ทั้งหมด

https://www.w3schools.com/cssref/default.asp


## Javascript

Javascript เป็นภาษาคอมพิวเตอร์ สามารถนำมาใช้งานร่วมกับ HTML เพื่อให้เว็บไซต์สามารถตอบสนองผู้ใช้งานได้มากขึ้น ในปัจจุบัน Javascript ได้รับความนิยมอย่างสูง เพราะสามารถนำไปพัฒนา Server Side, Mobile, Desktop และอื่นๆ


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
      <script src="js/sample.js"></script>
  </body>
</html>
```

ไฟล์ `/js/sample.js`
```js
document.write("Hi");
```

### JavaScript HTML DOM

คือ การเปลียนแปลงเนื้อหาใน Element นั้น เช่น เปลี่ยนข้อความ, เพิ่ม Tag, ซ้อน Element เป็นต้น

สามารถศึกษาได้จาก: https://www.w3schools.com/js/js_htmldom.asp

### Syntax

#### 1. Variables (ตัวแปล)

keyword สำหรับประกาศตัวแปลใน Javascript มีอยู่ 3 เภท ได้แก่ `var`, `let` และ `const` (ตัวแปลแบบ constant)


```js
var notbook = 'Asus';
let tablet = 'IPad';
const desktop = 'Dell';

console.log(notbook);
console.log(tablet);
console.log(desktop);
```

>**คำแนะนำ:**
>
> * หลักการตั้งชื่อตัวแปล ให้ขึ้นต้นด้วยตัวอักษรพิมพ์เล็ก และถ้าหากมี 2 คำใช้คำถัดไปขึ้นด้วยตัวพิมพ์ใหญ่ เช่น (phoneColor)
>
> * Javascript es6 ให้ใช้ let และ const เป็นหลัก
>
> * "let" ถ้าตั้งชื่อตัวแปลซ้ำจะ Error

ความแตกต่างระหว่าง var และ let คือ 'var' สามารถเรียกใช้งานนอก block ได้ แต่ 'let' ไม่ได้

ตัวอย่าง: 
```js
if (true) {
  var a1 = 'cat';
  let a2 = 'rat';
}

console.log(a1);
console.log(a2);
```

##### Data Types (ประเภทข้อมูลตัวแปล)

1. `String` --> 'hello', "hello", `hello`

```js
let str = 'goku';

console.log('var str is ' + str);
console.log('var str type is', typeof str);
```

2. `Number` --> 5, 6.01

```js
let num = 12345;

console.log('var num is', num);
console.log('var num type is', typeof num);
```

3. `Boolean` --> true / false

```js
let bool = true;

console.log('var bool is', bool);
console.log('var bool type is', typeof bool);
```

4. `Object` --> {}, []

```js
let obj = {
    name: 'honda',
    color: 'white'
};

console.log('var obj is', obj);
console.log('var obj type is', typeof obj);

console.log('car name', obj.name);
console.log('car color', obj.color);
```

Array ใน Js จะจัดอยู่ในประเภทข้อมูล Object

```js
let arr = ['red', 'black', 'green'];

console.log('var arr is', arr);
console.log('var arr type is', typeof arr);

// check ว่าเป็น object แบบ array
console.log('var arr type is Array', arr instanceof Array);

console.log(arr[0]);

arr.push('orange');
console.log(arr);
```