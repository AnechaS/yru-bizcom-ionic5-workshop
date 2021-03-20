// Loops (วนซ้ำ)


// For (รู้จำนวนครั้งที่จะวนซ้ำ)
for (let i = 0; i < 5; i++) {
  console.log(i);
}


// White (ไม่รู้จำนวนครั้งที่จะวนซ้ำ)
let c = 0;
while (c < 5) {
  console.log(c);

  c += 1;
}


// Do-white (ไม่รู้จำนวนครั้งที่จะวนซ้ำ โดยทำก่อน 1 ครั้ง แล้วเช็กเงื่อนไข)
c = 0;
do {
  console.log(c);

  c += 1;
} while (c < 5);


// Array (ตัวอย่างการนำไปใช้งานกับ Array)
let cars = ["honda", "toyota", "bmw", "nisson"];

/* for (let index = 0; index < cars.length; index++) {
    const car = cars[index];
    console.log(car);   
} */

/* for (const key in cars) {
    const car = cars[key];
    console.log(car);
} */

/* for (const object of collection) {
    console.log(object);
} */

cars.forEach(function (car) {
  console.log(car);
});
