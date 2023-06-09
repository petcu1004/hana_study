{
  // 지역 변수를 선언하고 몇 가지 조작을 했지만 그 결과를 밖에서 볼 수 없습니다.

  let message = "안녕하세요."; // 블록 내에서만 변숫값을 얻을 수 있습니다.

  //   console.log(message); // 안녕하세요.
}

// console.log(message); // ReferenceError: message is not defined

{
  // 메시지 출력
  let message = "안녕하세요.";
  //   console.log(message);
}

{
  // 또 다른 메시지 출력
  let message = "안녕히 가세요.";
  //   console.log(message);
}

// // 블록이 없으면 에러가 발생합니다.

// // 메시지 출력
// let message = "안녕하세요.";
// alert(message);

// // 또 다른 메시지 출력 변수명이 동일하니깐
// let message = "안녕히 가세요."; // SyntaxError: Identifier 'message' has already been declared
// alert(message);

//변수는 자기가 만들어진 곳이 그의 스코프다!
// function s(name){
//     if(name=='a'){
//         let ifInVal=10;
//     }
// }

function sayHiBye(firstName, lastName) {
  // 헬퍼(helper) 중첩 함수
  function getFullName() {
    return firstName + " " + lastName;
  }

  console.log("Hello, " + sayHiBye("a", "b")); //undefined
  console.log("Bye, " + getFullName()); //error
}
