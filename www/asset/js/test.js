"use strict";
var num = 100;
var hello;
hello = 'こんにちは';
var yes;
yes = true;
var car = 'BMW';
car = { brand: 'BMW' };
var hobbies = ['読書', 'スポーツ'];
hobbies.push('100');
console.log(hobbies);
var olympic = ['東京', 2020];
console.log(olympic);
var Colors;
(function (Colors) {
    Colors[Colors["Gray"] = 0] = "Gray";
    Colors[Colors["Red"] = 1] = "Red";
    Colors[Colors["Green"] = 100] = "Green";
    Colors[Colors["Blue"] = 101] = "Blue";
})(Colors || (Colors = {}));
var myColor = Colors.Green;
console.log(myColor);
var myName = '太郎';
function returnMyName() {
    return myName;
}
console.log(returnMyName());
function sayHello() {
    console.log('Hello!');
}
sayHello();
function noReturn() {
    throw new Error('エラーです！');
}
var something;
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(23, 7));
var myFunctionType;
myFunctionType = multiply;
console.log(myFunctionType(23, 89));
var complex = {
    data: [100, 3.14, -3],
    output: function (all) {
        return this.data;
    },
};
var complex2 = {
    data: [123, 866, 1.9],
    output: function (flag) {
        return this.data;
    },
};
var thisYear = '2019';
thisYear = '2019';
function checkLength(str) {
    if (str != null) {
        return str.length;
    }
    else {
        return 0;
    }
}
function controlMe(isTrue) {
    var result = 12;
    return result;
}
var addNum = function (value1, valuer2) { return value1 + valuer2; };
var mulNum = function (value) { return value * 2; };
console.log(mulNum(3));
var outputString = function (text) {
    console.log(text);
};
console.log('こんにちは！');
var countDown = function (start) {
    if (start === void 0) { start = 10; }
    while (start > 0) {
        console.log(start);
        start--;
    }
    console.log('終了');
};
countDown();
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(makeArray(1, 2));
function printInfo() {
    var info = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        info[_i] = arguments[_i];
    }
    console.log("\u79C1\u306E\u540D\u524D\u306F" + info[0] + "\u3067\u3001" + info[1] + "\u6B73\u3067\u3059\u3002");
}
printInfo('太郎', 30);
var Person = (function () {
    function Person(name, place, age) {
        this.name = name;
        this.place = place;
        this.age = age;
        this.name = name;
        this.place = place;
        this.age = age;
    }
    return Person;
}());
var person = new Person('太郎', '東京', 30);
console.log(person);
var Helpers = (function () {
    function Helpers() {
    }
    Helpers.calcCircum = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircum(83));
var OnlyOne = (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
var right = OnlyOne.getInstance();
console.log(right.name);
console.log(MyMath.Circum.calcCircum(3));
console.log(MyMath.calcRect(20, 8));
var PI = 2.14;
console.log(PI);
var math = MyMath.Circum;
console.log(math.calcCircum(3));
