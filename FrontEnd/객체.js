let hana = {
  name: "홍길동",
  group: "하나은행 전산실",
  work: function () {
    return `풀스택 개발`;
  },
};

console.log(hana);
console.log(hana.name);
console.log(hana["name"]);
console.log(hana.work());

const key = "name";

console.log(hana[key]);
console.log(hana.key); //undefined

const nameKey = "name";
const nameValue = "이순신";

const groupKey = "group";
const groupValue = "빅데이터처리";

let hana2 = {
  [nameKey]: nameValue,
  [groupKey]: groupValue,
  work: function () {
    return `${this.name}님이  ${this.group}의 일을 합니다.`;
  },
};

//undefined
console.log(hana2);
console.log(hana2.nameKey);
console.log(hana2.groupKey);

console.log(hana2[nameKey]);
console.log(hana2[groupKey]);
console.log(hana2.work());

//group을 '오라클 튜닝'바꿔보세요
hana2["group"] = "오라클 튜닝";
console.log(hana2.work());

//pay : 500 추가하기
//이순신님은 500만원 급여를 받습니다.
hana2["pay"] = 500;
console.log(`${hana2.name}님은 ${hana2.pay}만원 급여를 받습니다.`);

// const로 선언한 객체의 특징
// 1)const로 선언할 경우 객체 자체를 변경할 수 없다.
// 2)객체 안의 프로퍼티나 메서드는 변경할 수 있다.

const hee = {
  name: "정현희",
  group: "알파코",
};

console.log(hee);

//2) 객체 안의 프로퍼티나 메서드 변경 O
hee["name"] = "홍길동";
console.log(hee);
hee["pay"] = 500;
console.log(hee);

//1) const로 선언할 경우 객체 자체를 변경할 수 X
// const hee = { //hee를 이전에 선언했기 때문에 오류가 남!
//   age: 30,
// };
// console.log(hee);

//모든 키 값을 가져오기
console.log(Object.keys(hee)); //hee 객체의 모든 키 값을 배열로 가지고 온다.

//모든 value 값을 가져오기
console.log(Object.values(hee));

//객체 키와 값이 동일한 변수이면 name:name, age:age이렇게 된 것은 name, age
const name = "홍길동";
const age = 23;

let hee2 = {
  [name]: name,
  [age]: age,
};

let hee3 = {
  name,
  age,
};
