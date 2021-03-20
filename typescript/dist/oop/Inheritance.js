"use strict";
/**
 * Inheritance (การสืบทอดคุณสมบัติ)
 * -----------------------------
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal() {
        this.name = '';
        this.color = '';
        this.s = '#=@';
        this.isWalking = false;
        console.log('initialed class "Animal"');
    }
    Animal.prototype.walk = function () {
        this.isWalking = true;
        console.log(this.color + ' ' + this.name + ' is walking.');
    };
    Animal.prototype.show = function () {
        console.log('name:', this.name);
        console.log('color:', this.color);
        console.log('walking:', this.isWalking);
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(color) {
        var _this = _super.call(this) || this;
        _this.name = 'cat';
        _this.color = color;
        return _this;
    }
    Cat.prototype.checkWalking = function () {
        console.log('wolking status: ' + this.isWalking ? 'Yes' : 'No');
    };
    return Cat;
}(Animal));
var cat = new Cat('Black');
console.log(cat.name);
console.log(cat.color);
cat.walk();
cat.checkWalking();
var rat = new Animal();
rat.name = 'rat';
rat.color = 'white';
rat.walk();
