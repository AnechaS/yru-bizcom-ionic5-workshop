// Functions (ฟังก์ชัน)
// ประโยชน์ของการสร้างฟังก์ชัน คือ ช่วยลดการเขียนโค้ดซ้ำๆ และช่วยให้แก้ไขโค้ดได้ง่ายสะดวกรวดเร็ว เพราะอยู่ในที่เดียว


function say(message = "") {
  // console.log(message);
  return message;
}

console.log(say());
console.log(say("hello"));


// Arrow function
const showMessage = (message = "") => {
  return message;
};

console.log(showMessage("hi"));


// Promise function (นิยมนำมาใช้แก้ปัญหา Callback function)
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

/* sayPromise('hey')
  .then(result => {
      console.log(result);
  })
  .catch(error => {
      console.log(error);
  }); */

async function runPromise() {
  // asynchronous function
  /* asayPromise('hey')
      .then(result => {
          console.log(result);
      })
      .catch(error => {
          console.log(error);
      });
  
  console.log('gg'); */

  try {
    // synchronous function
    const result = await sayPromise("hey");
    console.log("gg");
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

runPromise();
