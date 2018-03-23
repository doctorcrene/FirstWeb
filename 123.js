// // isNaN()
//
// // function func() {
// //     console.log(arguments[0]);
// // }
// //
// // func();
//
// let i = 0;
// console.log(`i:${i}`);
//
// let str = "0123456";
// console.log(str[2]);
//
// let arr = [0, 'kdsjflskjdf', 1, 2, 3, 4, 5];         //数组
//
//
// arr.push(1);
// arr.push(2);
//
// console.log(arr.pop());
//
// let arr1 = [0, 1, 2, 3];
// let arr2 = [...arr1];    //复制数组
//
//
// let obj = {
//     name: "asdf",
//     age: 23
// };
//
// for (let i in obj) {
//
//
// }
//
// for (let i of arr) {
//
// }
//
// function Cat() {
//     this.type = 'meow';
//     this.age = 3245;
// }
//
// // Cat.
//
// let cat1 = new Cat();
//
//
// function Human() {
// }
//
// Human.prototype.type = '人';
//
// function MaleHuman() {
//
// }
//
// //////////////////////////////////////////
//
// let a = function () {       //匿名函数
//     console.log(1);
// };
//
// ////////////////////////////////////////
//
// function f(num) {
//     if (num < 1)
//         return 1;
//     else
//         return num * f(num - 1);
//     // return num*arguments.callee(num-1);  //指向本函数，在多数浏览器中不适合使用
// }
//
// //////////////////////////////////////////
//
// function da() {
//     let name = 'xiaojilao';
//     return function () {       //返回一个函数
//         console.log(name);
//     }
// }
//
// let da1 = new da();      //在外部通过接受这个函数来访问另一个作用域中的变量（闭包
// da1();
//
// ////////////////////////
//
// function createFunction() {
//     var result;
//     for (var i = 0; i < 10; i++) {
//         result[i] = i;
//     }
//
// }
//
// ///////////////////////////
//
// (function () {         //用var来模拟块级作用域
//     var i = 0;
// })();
//
// ///////////////////////////
//
// function Person() {
//     let name = 'xiaojilao';       //模拟私有变量，只能通过function进行访问，且没有修改的权限
//     return {
//         getName: function ()
//         {
//             return name;
//         }
//     }
// }
//
// let person1 = new Person();
// console.log(person1.getName());
//
// ////////////////////////
//
// {
//     let name = 0;
//     Personn = function (value) {
//         name = value;
//     };
//
// }


const reg=new RegExp(/\w+@(\w+\.)+\w+/);

let a = "doctorcrene@mail.dlut.edu.cn";

console.log(reg.exec(a));
