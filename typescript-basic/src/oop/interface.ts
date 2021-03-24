// Interface คือ แม่แบบ เรียกใช้งานโดย ClassName implements InterfaceName {}
// ถ้าหากมี Propertys หรือ Methods ไม่ตรงกับแม่แบบจะเกิด Error

interface IPhone {
  name: string;
  color: string;

  playMusic(name: string): void;
}

class IPhone5s implements IPhone {
  name = 'iPhone 5s';
  color = 'black';

  playMusic(name: string) {
    console.log(this.name + 'play song name ' + name);
  }

  show() {
    console.log('name:', this.name);
    console.log('color:', this.color);
  }
}

let iphone5s = new IPhone5s();
iphone5s.playMusic('Hello');
iphone5s.show();