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