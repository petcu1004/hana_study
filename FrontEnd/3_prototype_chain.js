const testObj = {};

console.log(typeof testObj);
//오브젝트명.__proto__ 결과는 [Object : null prototype]{}
console.log(testObj.__proto__);
//오브젝트명.__proto__ 해석:testObj가 물려 받은 유전자 이름, 부모의 prototype명(=부모에게 물려받은)을 참조하기
//자식입장
const testObj2 = { name: "aa" };
console.log(testObj2.__proto__);

function Member(name, year) {
  this.name = name;
  this.year = year;
}

console.log(Member.prototype); // 결과 {}
//부모의 입장 - 자손에게 넘겨주고 싶은 유전자

// console.dir(Member.prototype, {
//   showHidden: true,
// });

console.log(Member.prototype.constructor === Member);
//Member객체의 유전자를 가리키는 것 중에서 생성자는 바로 Member 객체이다.
console.log(Member.prototype.constructor.prototype === Member.prototype); //true

const hee = new Member("정현희", 2000);
console.log(hee.__proto__); //{}
//__proto__ : 상속에서 부모 클래스에 해당하는 값을 가리킴
console.log(hee.__proto__ === Member.prototype); //true

console.log(testObj.__proto__ === Object.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
//자식이 부모를 바꿀 수 있도록 하는 작업이 이루어지기 때문에 배움
//인스턴스화(객체화)되고 나서도 가능한 일
//부모의 유전자 값 => __proto__ , 유전자 => prototype
console.log(Member.prototype.__proto__ === Object.prototype);
//멤버의 유전자인데 그의 부모 유전자(=부모 유전자를 말함) === 오브젝트의 유전자
//새미의 유전자의 부모 유전자는 ? => 아빠, 엄마의 유전자

//아래 두개 코드가 똑같은 것
console.log(hee.toString()); //[object Object]
console.log(Object.prototype.toString()); //[object Object]

//활용1
function Member2(name, year) {
  this.name = name;
  this.year = year;
  this.sayHello = function () {
    return `${this.name}이 인사합니다.`;
  };
}

const hee2 = new Member2("정현희", 2000);
const kim2 = new Member2("김수진", 2010);

console.log(hee2.sayHello());
console.log(kim2.sayHello());

//sayHello()라는 메소드가 다른 공간에서 2번 만들어진다는 것
//객체가 될 때 메모리가 2개 생긴다는 것
//그래서 false값이 나옴.
console.log(hee2.sayHello === kim2.sayHello);

//sayHello()를 부모한테 재정의한다.
//장점 1번 메소드 만들어주면
Member2.prototype.sayHello = function () {
  //Member2에 sayHello를 넣어줌
  return `${this.name}이 인사를 합니다.`;
};

function Member3(name, year) {
  this.name = name;
  this.year = year;
}

Member3.prototype.sayHello = function () {
  return `${this.name}이 인사를 합니다.`;
};

hee3 = new Member3("정현희", 2000);
kim3 = new Member3("김수진", 2010);
console.log(hee3.sayHello());
console.log(kim3.sayHello());

//=== : 값도 같고 주소도 같으면 true
//sayHello()가 같은 곳을 가리킨다는 것!! => 그래서 공간의 낭비가 없음
console.log(hee3.sayHello === kim3.sayHello);
