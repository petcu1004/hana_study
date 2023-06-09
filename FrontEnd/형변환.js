//타입 변환
// Type conversion

// 1) 명시적 변환
// 2) 암시적 변환

let age = 32;
// 1) 명시적 변환 숫자형 --> 문자형
let stringAge = age.toString();
console.log(typeof stringAge);
console.log(typeof age);

console.log("98" + 2);
console.log(98 + 2);
console.log("98" - 2); //'98' ---> 암묵적 변환

//명시적 형변환
console.log(typeof (99).toString(), (99).toString());
console.log(typeof true.toString(), false.toString());
console.log(typeof Infinity, toString());

console.log(typeof parseInt("0"), typeof parseFloat("0.56"));

//boolean 타입으로 암묵적 형변환
console.log(!!"abcdef"); //'abcdef'문자열의 자료가 있으면 true, -> ! : false --> !! : true
console.log(!true);
console.log(!false);
console.log(!"true");
console.log(!"false");

console.log({});
console.log(!{}); //객체에 아무것도 없으면(또한, 배열에 아무것도 없으면) 모두 false이다.
console.log(!{ a: "1" });

console.log(!!{}, typeof !!{});
console.log(!![], typeof !![]);
