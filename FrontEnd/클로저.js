function makeCounter() {
  let count = 0;

  //익명형 함수
  return function () {
    return count++;
  };
}

let counter = makeCounter();
//함수 호출될 때마다 카운트가 증가됨.
console.log(counter());
console.log(counter());
console.log(counter());
