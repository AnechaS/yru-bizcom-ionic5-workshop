const _ = require("lodash");
const showMessage = require("./showMessage");

let score = '99';

// ตรวจสอบข้อมูล 'score' จะต้องเป็น number
if (!_.isNumber(score)) {
  console.log('"score" must be a Number');
} else {
  if (score >= 80) {
    // มากกว่าหรือเท่ากับ 80 => A
    showMessage("A");
  } else if (score >= 70) {
    // มากกว่าหรือเท่ากับ 70 => B
    showMessage("B");
  } else if (score >= 60) {
    // มากกว่าหรือเท่ากับ 60 => C
    showMessage("C");
  } else if (score >= 50) {
    // มากกว่าหรือเท่ากับ 50 => D
    showMessage("D");
  } else {
    // น้อยกว่า 50 => E
    showMessage("E");
  }
}
