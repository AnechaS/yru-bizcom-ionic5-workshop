class Animal {
    public name: string = "";
    public color: string = "";
  
    private s: string = "#=@";
  
    protected isWalking: boolean = false;
  
    constructor() {
      console.log('initialed class "Animal"');
    }
  
    public walk(): void {
      this.isWalking = true;
      console.log(this.color + " " + this.name + " is walking.");
    }
  
    public show(): void {
      console.log("name:", this.name);
      console.log("color:", this.color);
      console.log("walking:", this.isWalking);
    }
  }
  
  class Cat extends Animal {
    public name: string = "cat";
  
    constructor(color: string) {
      super(); // เรียกใช้งาน constructor ของ class parent
  
      this.color = color;
    }
  
    checkWalking() {
      console.log("wolking status: " + this.isWalking ? "Yes" : "No");
    }
  }
  
  let cat = new Cat("Black");
  console.log(cat.name);
  console.log(cat.color);
  cat.walk();
  cat.checkWalking();
  
  let rat = new Animal();
  rat.name = "rat";
  rat.color = "white";
  rat.walk();