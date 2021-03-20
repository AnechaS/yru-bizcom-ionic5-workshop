// Operators (ตัวดำเนินการ หรือ สัญลักษณ์)

// ((n1 บวก n2) คูณ n3) หาร n4
console.log(((1 + 1) * 10) / 2); // => 10


// เพิ่ม / ลด
let n1 = 1;

// เพิ่ม (++)
++n1;
console.log(n1); // => 2

// ลด (--)
--n1;
console.log(n1); // => 1


// assignment
let n2 = 1;

// เอาข้อมูลเดิมใน 'n2' + 1 และเปลียนค่า
n2 += 1;
console.log(n2); // => 2

// เอาข้อมูลเดิมใน 'n2' - 1 และเปลียนค่า
n2 -= 1;
console.log(n2); // => 1


// เปลียบเทียบ
// เท่ากับ
console.log(1 == 1); // => true
console.log(1 === "1"); // => false (เพราะประเภทข้อมูลไม่เหมือนกัน)

// ไม่เท่ากับ
console.log(1 != 2); // => true
console.log(2 !== "2"); // => true

// มากกว่า
console.log(2 > 1); // => true
console.log(2 >= 1); // => true

// น้อยกว่า
console.log(1 < 2); // => true
console.log(2 <= 2); // => true


// Logical
// not (ไม่) คือ ไม่เท่ากับ หรือ ตรงกันขาม
console.log(!true); // => false

// and (และ) คือ ด้านหน้าและหลัง && จะต้องมีค่าเป็น true ถึงจะมีค่าเท่ากับ true
console.log(true && true); // => true

// or (หรือ) คือ ด้านหน้าหรือหลัง || มจะต้องีค่าเป็น true ถึงจะมีค่าเท่ากับ true
console.log(false || true); // => true
