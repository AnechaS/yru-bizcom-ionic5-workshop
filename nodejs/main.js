const _ = require("lodash");
const showMessage = require("./showMessage");

let score = '99';

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
