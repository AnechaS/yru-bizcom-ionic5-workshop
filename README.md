# Step-0: Syntex ของ HTML, CSS, Javascript, Typescript

## 1. HTML (HyperText Markup Language)

HTML เป็นภาษาคอมพิวเตอร์ที่ใช้สร้างหน้าเว็บ เวอร์ชันของ HTML ในปัจจุบันเป็นเวอร์ชัน **5** โดยโค้ดของ HTML จะประกอบด้วย Tag ต่างๆ ที่ใช้แตกต่างกันไป โดยจะประกอบด้วยเครื่องหมาย “<>” และชื่อที่อยู่ตรงกลาง Tag โดยสามารถศึกษา Tag ของ HTML ทั้งหมดได้จาก https://www.w3schools.com/html

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
<label for="name">name: </label>
<input type="text" id="name" name="name" placeholder="Enter your name" />

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

## 2. CSS 
