// copy of value: 값 복사 - 변수, 프로퍼티
//특징 : 다른 별도의 메모리 공간으로 수정해도 독립적이다.

//copy of reference :참조(주소) 복사 - 객체
//특징 : 같은 메모리 주소를 복사함으로 수정하면 종속적이다.

let origin = "안녕";
let clone = origin;

console.log(origin);
console.log(clone);

clone += "하세요";

console.log(origin);
console.log(clone);

let objOri = {
  hello: "안녕11",
};
let cloneObj = objOri; //참조복사

console.log(objOri["hello"]);
console.log(cloneObj["hello"]);

cloneObj["hello"] += "하세요";
//객체는 copy of reference 특징을 갖고 있음.
console.log(objOri["hello"]);
console.log(cloneObj["hello"]);
