/**
 * Class 
 * -----------------------------
 * เป็นซอสโค้ดที่เรามองว่าเป็น Object (วัตถุ)โดย Class ประกอบไปด้วย Properties (คุณสมบัติ) และ Methods (ดำเนินการ)
 * 
 * + Properties: ข้อสั่งเกตคือ ประกาศคลายกับตัวแปล (name = value)
 *               ตัวอย่างด้านล้าง Properties ของ "Person" ได้แก่ firstname, lastname, age, secretMsg, isWalking
 * 
 * + Methods:    ข้อสั่งเกตคือ ประกาศคลายกับฟังก์ชัน (name() {})
 *               ตัวอย่างด้านล้าง Methods ของ "Person" ได้แก่ show, walk
 */

/**
 * Visibility (การมองเห็น)
 * -----------------------------
 * + public:    ภายนอก class สามารถเรียกใช้งานได้
 * + private:   เรียกใช้งานได้เฉพาะภายใน class ตัวเอง
 * + protected: เรียกใช้งานได้เฉพาะภายใน class ตัวเอง และ class ที่สืบทอด
 */

/**
 * Static
 * -----------------------------
 * เป็น keyword ที่ทำให้เราสามารถเรียกใช้ Properties หรือ Methods ได้ทันทีโดยไม่ต้องประกาศ new ClassName()
 */

class Person {
  public firstname: string;
  public lastname: string;
  age: number;
  private secretMsg: string = 'Hello';
  protected isWalking: boolean = false;
  static message: string = 'Hi';

  constructor(firstname: string, lastname: string, age: number, isWalking:boolean = false) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.isWalking = isWalking;
  }

  public walk() {
    this.isWalking = true;
    console.log('walking.');
  }

  public show(): void {
    console.log('firstname:', this.firstname);
    console.log('lastname:', this.lastname);
    console.log('age:', this.age);
    console.log('walking:', this.isWalking ? 'Yes': 'No');
    console.log('secret message:', this.secretMsg);
  }

  public static show(
    firstname: string, 
    lastname: string, 
    age: number, 
    isWalking: boolean = false, 
    secretMsg: string = 'Hello'
  ): void {
    console.log('firstname:', firstname);
    console.log('lastname:', lastname);
    console.log('age:', age);
    console.log('walking:', isWalking ? 'Yes': 'No');
    console.log('secret message:', secretMsg);
  }

  public static showx(
    firstname: string,
    lastname: string, 
    age: number, 
    isWalking:boolean = false
  ): void {
    let person = new Person(firstname, lastname, age, isWalking);
    person.show();
  }
}

let tomus = new Person('Tomus', 'k', 12);

// get propertys
console.log(tomus.firstname);
console.log(tomus.lastname);
console.log(tomus.age);

// console.log(tomus.msgx); // Error เพราะ property msgx เป็น private
// console.log(tomus.isWalking); // Error เพราะ property isWalking เป็น protected

// set propertys
tomus.firstname = 'Tom';
console.log(tomus.firstname);

// call methods
tomus.show();
tomus.walk();

// call static property
console.log(Person.message);

// call static methods
Person.show('Sara', 't', 15, true);
Person.showx('Silva', 'x', 13);