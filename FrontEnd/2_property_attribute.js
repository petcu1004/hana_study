//1) 데이터 property - 키와 값에 대한 속성들
//2) Access property - set와 get에 대한 속성 , 자체적으로 값을 가지고 있지 않지만 다른 값을 가져오거나 설정할 때 호출되는 함수로 구성된 프로퍼티

const hee = {
  name: "정현희",
  year: 2000,
};

console.log(Object.getOwnPropertyDescriptor(hee, "name"));
console.log(Object.getOwnPropertyDescriptors(hee));

//writeable: 값을 수정할 수 이쓴지 여부 false:수정X
//enumerable : 열거가 가ㄴ으한지 여부 for ~in 등으로 사용할 수 있다.
//configurable : 재정의가 가능한지,false인 경우 프로퍼티를 삭제하거나 변경 금지한다.
//              단, writable이 true인 경우 값 변경과 writable을 변경하는 건 가능하다.

const hee2 = {
  name: "정현희",
  year: 2000,

  get age() {
    return new Date().getFullYear() - this.year;
  },
  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};

console.log(hee2);
console.log(hee2.age);
hee2.age = 32;
console.log(hee2.year);

console.log(Object.getOwnPropertyDescriptor(hee2, "age"));

//재정의하기 'height'추가하기
Object.defineProperty(hee2, "height", {
  value: 175,
  writable: true,
  enumerable: true,
  configurable: true,
});

console.log(Object.getOwnPropertyDescriptor(hee2, "height"));
hee2.height = 180; //수정이 됨.

console.log(Object.getOwnPropertyDescriptor(hee2, "height"));

console.log("-------------writable : false로 만들고 다시 수정하기----------");
Object.defineProperty(hee2, "height", {
  writable: false,
});
console.log(Object.getOwnPropertyDescriptor(hee2, "height"));
hee2.height = 170; //에러는 없고 수정은 안됨.
console.log(Object.getOwnPropertyDescriptor(hee2, "height"));

console.log("-------------enumerable : false로 만들기----------");
console.log(Object.keys(hee2));
Object.defineProperty(hee2, "height", {
  enumerable: false,
});

console.log(
  "-------------configurable : false로 만들기면 name을 열거할 수 없다.----------"
);
Object.defineProperty(hee2, "height", {
  writable: true,
  configurable: false,
});
console.log(Object.getOwnPropertyDescriptor(hee2, "height"));
Object.defineProperty(hee2, "height", {
  value: 178, //바뀐다.
});
console.log(Object.getOwnPropertyDescriptor(hee2, "height"));
Object.defineProperty(hee2, "height", {
  writable: false,
});
console.log(Object.getOwnPropertyDescriptor(hee2, "height"));

//에러가 남(안바뀜)
// Object.defineProperty(hee2, "height", {
//   value: 188, //안 바뀐다.
// });
console.log(Object.getOwnPropertyDescriptor(hee2, "height"));

//Imutable Object - 불변
const hee10 = {
  name: "홍길동",
  year: 2000,
  get age() {
    return new DataTransfer().getFullYear - this.year;
  },
  set age(age) {
    this.year = new Date().getFullYear - age;
  },
};
console.log(hee10);

//Extensible - 확장 가능 False로 하면 추가는 안되고 삭제만 된다
console.log(Object.isExtensible(hee10)); //true
hee10["position"] = "grammer";
console.log(hee10);
Object.preventExtensions(hee10); //확장을 막음.
hee10["position11"] = "grammer11"; //수행 안됨 = 확장이 안됨
console.log(hee10);

//Seal - 밀봉하다, 추가, 삭제 안됨 -> 많이 사용함.
console.log(Object.isSealed(hee10)); //Seal이 되었나요? false
Object.seal(hee10); //밀봉합니다.
console.log(Object.isSealed(hee10)); //Seal 되었나요? true

//값을 추가하기 -- 안되어야 함.
hee10["groupname"] = "hana";
console.log(hee10);
//값을 삭제하기 -- 안돼야 함.
delete hee10["name"];
console.log(hee10);

//밀봉된 것을 해제하기
Object.defineProperty(hee10, "name", {
  writable: true,
});

//Freezed - 내동, 동결
//가장 높은 등급 동결
//읽기 외에 모든 기능이 안되는 것
console.log(Object.isFrozen(hee10)); //동결상태인가요? False
Object.freeze(hee10);
console.log(Object.isFrozen(hee10)); //동결상태인가요? True
//값을 추가하기 -- 안되어야 함.
hee10["groupname"] = "hana";
console.log(hee10);
//값을 삭제하기 -- 안돼야 함.
delete hee10["name"];
console.log(hee10);

//상위 객체{하위객체} 상태인데 상위 객체를 동결했다면 하위 객체도 동결되나요?=> 아니오
const hee11 = {
  name: "홍길동",
  year: 2000,

  subhee11: {
    name: "홍길동 아들",
    year: 2020,
  },
};

Object.freeze(hee11["subhee1"]);
console.log(Object.isFrozen(hee11));
console.log(Object.isFrozen(hee11["subhee11"])); //false

//화살표 함수로 만든 함수는 객체가 될까? => 아니오

//요즘에 나온 화살표 함수는 객체가 될 수 없다.
const MemberArrow = (name, year) => {
  this.name = name;
  this.year = year;
};

const ima = new MemberArrow("홍길동", 2000);
console.log(ima);

//옛날에 나온 함수식은 객체가 됨.
const MemberF = function (name, year) {};
