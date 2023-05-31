//1) object 를 생성해서 만들기 - 기본 {}
//2) class를 인스턴스화해서 만들기 - new
//3) function을 이용해서 만들기 - 함수식을 이용해서

//1)
const hee = {
  name: "정현희",
  age: 23,
};

console.log(hee);

//2)
class Hee2 {
  name;
  year;
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

const iHee2 = new Hee2("정현희", 2000);
console.log(iHee2);
console.log(typeof iHee2);

//3)
function Hee3(name, year) {
  this.name = name;
  this.year = year;
}

const iHee3 = new Hee3("정현희", 2000);
console.log(iHee3);
console.log(typeof iHee3);
