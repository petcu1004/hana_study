const testObj = {};
//testObj의 부모 유전자 protype에 접근할 수 있는 내장(숨겨진) 된 프로퍼티
console.log(testObj.__proto__);

function Member(name, year) {
  this.name = name;
  this.year = year;
  //__proto__ = 자동생성됨.
  //객체 만들기
}

console.log(Member.prototype); //{}자식이 물려 받은 유전자
// console.dir(Member.prototype, {
//   showHidden: true,
// });

console.log(Member.prototype.constructor === Member);
console.log(Member.prototype.constructor.prototype === Member.prototype);

const hee = new Member("팥", 2000);
const yuJin = new Member("슈크림", 2010);

console.log(hee.__proto__); //{}
console.log(hee.__proto__ === Member.prototype); //true

//1. 활용하기
function IdolModel(name, year) {
  this.name = name;
  this.year = year;
  this.sayHello = function () {
    return ` ${this.name}님 안녕`;
  };
}

const yuJin1 = new IdolModel("김유진", 2000);
const heeJin1 = new IdolModel("김희진", 2010);

console.log(yuJin1.sayHello());

console.log(heeJin1.sayHello());

//sayHello()를 IdolModel.prototype으로 넣어준다.
IdolModel.prototype.sayHelloProto = function () {
  return `안녕하세요 ${this.name} ~~`;
};

console.log(yuJin1.sayHelloProto());
console.log(heeJin1.sayHelloProto());

console.log(yuJin1.__proto__ === heeJin1.__proto__);
console.log(yuJin1.__proto__.sayHelloProto === heeJin1.__proto__.sayHelloProto);

function IdolModel2(name, year) {
  this.name = name;

  this.year = year;

  this.sayHello = function () {
    return `${this.name}이 인사를 합니다.`;
  };
}

const yuJin2 = new IdolModel2("안유진", 2003);

const wonYoung2 = new IdolModel2("장원영", 2002);

//sayHello 함수가 어떻게 되어 있는지 알아보기

console.log(yuJin2.sayHello()); //sayHello()가 아래와 다른 메모리 공간에 존재함

console.log(wonYoung2.sayHello()); //그래서 메소드가 동일한 것이 2군데 들어 가니깐 공간 낭비쟎아

console.log(yuJin2.sayHello === wonYoung2.sayHello); //false

console.log(yuJin2.hasOwnProperty("sayHello")); //yuJin2객체가 sayHello메서드를 가지고 있는지 판단 true

// 52, 53줄의 메모리 낭비를 줄이기 위한 예제

function IdolModel3(name, year) {
  this.name = name;

  this.year = year;
}

// 외부로 sayHello함수 만들기 - IdolModel3의 상위객체(.prototype)에 sayHello 메소드 만들어줌

IdolModel3.prototype.sayHello = function () {
  return `${this.name}이 인사를 합니다.`;
};

const yuJin3 = new IdolModel3("안유진", 2003);

const wonYoung3 = new IdolModel3("장원영", 2004);

console.log(yuJin3.sayHello()); //64줄에 의해 사용할 수 있음. 부모에게 sayHello가 있으니깐

console.log(wonYoung3.sayHello());

console.log(yuJin3.sayHello === wonYoung3.sayHello); //true 같은 sayHello메소드를 사용하고 있음을 보여 준다.

console.log(yuJin3.hasOwnProperty("sayHello")); //false 상속받은 메소드라고 알 수 있다.
