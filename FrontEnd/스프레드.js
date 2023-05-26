// function sumAll(...args) {
//   // return x1+10;

//   let sum = 0;

//   for (let arg of args) sum += arg;

//   return sum;
// }

// function sumAll(x1, ...x2) {
//   console.log(x1, x2);
// }

// console.log(sumAll(1));
// console.log(sumAll(1, 2));
// console.log(sumAll(1, 2, 3));

// function showName(firstName, lastName, ...titles) {
//   alert(firstName + " " + lastName); // Bora Lee

//   // 나머지 인수들은 배열 titles의 요소가 됩니다.
//   // titles = ["Software Engineer", "Researcher"]
//   alert(titles[0]); // Software Engineer
//   alert(titles[1]); // Researcher
//   alert(titles.length); // 2
// }

// showName("Bora", "Lee", "Software Engineer", "Researcher");

const arr1 = [1, 2];
console.log(arr1); //[1, 2]
console.log(...arr1); //전개 1 2

const arr2 = [1, 2, 3, 4, 5];
// const [n1, n2, n3, n4, n5] = arr2;
const [n1, n2, ...n5] = arr2;

console.log(n1);
console.log(n5);

const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
const arr7 = [arr4]; //[[10, 20]]
console.log(arr6);

//arr를 풀어서 넣어줌
const arr8 = [...arr4, ...arr5]; //arr4과 arr5를 합친 배열
console.log(arr8);

let arr = [1, 2, 3];
let arrCopy = [...arr];
console.log(JSON.stringify(arr) === JSON.stringify(arrCopy));
console.log(JSON.stringify(arr));
console.log(JSON.stringify(arrCopy));

console.log(arr == arrCopy); //배열의 별도 공간 (참조값)이 다르기 때문에 false임

//배열 복사에서 얕은 복사, 깊은 복사가 있음
//깊은 복사는 ...으로 복사함
arr.push(4);
console.log(arr);
console.log(arrCopy); //얕은 복사가 됨

//객체 ...
let obj = { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 };
let objCopy = { ...obj }; //객체 복사

//객체늬 내용 비교
console.log(JSON.stringify(obj) === JSON.stringify(objCopy));
console.log(obj == objCopy); //참조가 다름 -> 별도의 공간에 만들어진 것 : false

obj.f = 6;
console.log(obj);
console.log(objCopy);
