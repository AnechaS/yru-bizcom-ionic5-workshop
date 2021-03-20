// Object and Classes (การเขียนโปรแกรมเชิงวัตถุ OOP)

let Car = {
  name: "hondar",
  color: "black",
  show: function () {
    console.log(this.name, "color", this.color);
  }
};

console.log(Car.name);
console.log(Car["color"]);
Car.show();


// Classes

// ES5 (การสร้าง class ใน version es5)
/* function Notbook(name, color) {
  this.name = name;
  this.color = color;
}

Notbook.prototype.show = function () {
  console.log(this.name, "color", this.color);
};

const asus = new Notbook("asus", "black");
console.log(asus.name);
console.log(asus.color);
asus.show(); */


// ES6 (การสร้าง class ใน version ใหม่)
class Phone {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  show() {
    /* function t() {
      console.log(this);
    }

    t();

    const a = () => {
      console.log(this);
    };

    a(); */

    console.log(this.name, "color", this.color);
  }
}

const iphone = new Phone("iphone6", "white");
console.log(iphone.name);
console.log(iphone.color);
iphone.show();


// Inheritance
class Animal {
  name = '';
  color = '';

  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  walk() {
    console.log(this.color + ' ' + this.name + ' is walking.');
  }
}

class Cat extends Animal {
  name = 'cat';
  color = 'black';
}

let cat = new Cat();
cat.walk();

let rat = new Animal('rat', 'white');
rat.walk();
