"use strict";
// Interface คือ แม่แบบ เรียกใช้งานโดย ClassName implements InterfaceName {}
// ถ้าหากมี Propertys หรือ Methods ไม่ตรงกับแม่แบบจะเกิด Error
var IPhone5s = /** @class */ (function () {
    function IPhone5s() {
        this.name = 'iPhone 5s';
        this.color = 'black';
    }
    IPhone5s.prototype.playMusic = function (name) {
        console.log(this.name + 'play song name ' + name);
    };
    IPhone5s.prototype.show = function () {
        console.log('name:', this.name);
        console.log('color:', this.color);
    };
    return IPhone5s;
}());
var iphone5s = new IPhone5s();
iphone5s.playMusic('Hello');
iphone5s.show();
