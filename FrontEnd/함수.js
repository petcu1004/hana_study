// 함수식
function calc() {
  console.log(3 + (10 / 5) * 2);
}
calc();

//함수표현식
let calc1 = function () {
  console.log(3 + (10 / 5) * 2);
};
calc1();

//화살표 함수
let calc2 = () => {
  console.log(3 + (10 / 5) * 2);
};
calc2();

const multiply2 = (x, y) => {
  return x * y;
};

console.log(multiply2(3, 5));

function multiply3(x) {
  return function (y) {
    return function (z) {
      return `x:${x} y:${y} z:${z}`;
    };
  };
}

console.log(multiply3(3)(4)(5));

//3*4+5 = 17 값이 나오게
function multiply4(x) {
  return function (y) {
    return function (z) {
      let result = x * y + z;
      return `${result}`;
    };
  };
}
console.log(multiply4(3)(4)(5));

//제일 큰 수 5가 출력되게
function multiply5(x) {
  return function (y) {
    return function (z) {
      let max = x > y ? x : y;
      let result = max < z ? z : max;
      return `${result}`;
    };
  };
}
console.log(multiply5(3)(4)(5));

//힌트 -> ... 연산자, reduce()를 매개변수로 받아 반복처리하면 됨.
//힌트를 이용해서 작성해보아라.
//console.log(multiplyAll(3, 4, 5, 6)); //모두 곱해서 출력
//console.log(multiplyAll(1, 2, 3, 4, 5, 6, 7, 8));
let multiplyAll = (...args) => {
  return Object.values(args).reduce((a, b) => a * b, 1);
};

console.log(multiplyAll(3, 4, 5, 6)); //모두 곱해서 출력
console.log(multiplyAll(1, 2, 3, 4, 5, 6, 7, 8));
