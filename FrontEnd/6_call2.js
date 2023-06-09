this.x = 9;
var module = {
  x: 81,
  getX: function () {
    return this.x;
  },
};

console.log(module.getX());

var retrieveX = module.getX;
console.log(retrieveX());
//9. 반환 - 함수가 전역 스코프에서 호출됐음.

//module과 바인딩된 'this'가 있는 새로운 함수 생성

var boundGetX = retrieveX.bind(module);
console.log(boundGetX());
