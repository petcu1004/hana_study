// let name = "홍길동";

// function sayHi() {
//   console.log("Hi, " + name);
// }

// name = "이순신";

// sayHi(); //이순신

// function makeWorker() {
//   let name = "Pete"; //외부변수

//   return function () {
//     console.log(name);
//   };
// }

// let name = "John"; //전역변수

// // create a function
// let work = makeWorker();

// // call it
// work();

// function makeCounter() {
//   let count = 0;
//   return function () {
//     return count++;
//   };
// }

// let counter = makeCounter();
// console.log(counter()); //0
// console.log(counter()); //1
// console.log(counter()); //2

// //독립적인 렉시컬 환경을 갖고 있다.
// let counter1 = makeCounter();
// console.log(counter1()); //0
// console.log(counter1()); //1
// console.log(counter1()); //2

// function Counter() {
//   let count = 0;

//   //up()
//   this.up = function () {
//     return count++;
//   };
//   //down()
//   this.down = function () {
//     return --count;
//   };
// }

// let counter = new Counter();
// console.log(counter.up()); //0
// console.log(counter.up()); //1
// console.log(counter.up()); //2
// console.log(counter.down()); //2
// console.log(counter.down()); //1
// console.log(counter.down()); //0

// let phrase = "hello";
// if (true) {
//   let user = "hee";
//   function sayHi() {
//     console.log(`${phrase}, ${user}`);
//   }
//   sayHi();
// }

// sayHi();

// function sum(a) {
//   return function (b) {
//     return a + b;
//   };
// }

// //힌트- 첫번째 괄호가 반드시 반환되야 함.
// console.log(sum(1)(2)); //3=1+2
// console.log(sum(5)(1)); //6=5+1

function isBetween(a, b) {
  for (let i = a; i <= b; i++) {
    return true;
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7];
//isBetween 함수를 수행하면 나올 값
console.log(arr.filter(isBetween(3, 6))); //3, 4, 5, 6
