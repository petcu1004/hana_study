let ineMember = ["홍길동", "이순신", "정현희", "최민영", "오주희"];

console.log(ineMember);
console.log(typeof ineMember);

//박주민 추가하기
ineMember.push("박주민");
console.log(ineMember);

//박주민삭제하기
ineMember.pop();
console.log(ineMember);

ineMember.shift();
console.log(ineMember);

ineMember.unshift("최수영");
console.log(ineMember);

ineMember.slice(0, 1);
console.log(ineMember.slice(0, 1));

let venMember = ["남주민", "박수진"];
ineMember = ineMember.concat("남도일");
// ineMember = ineMember.concat(venMember);
console.log(ineMember);

let copyineMember = ineMember;
console.log(copyineMember === ineMember);

ineMember.sort(); //오름차순
console.log(ineMember);

ineMember.reverse(); //내림차순
console.log(ineMember);

let numbers = [1, 9, 7, 5, 3];
numbers.sort();
console.log(numbers);

//사용자 정의 sort
//만약 a===b 이면 0을 리턴함, a>b 양수(0, 음수를 제외한 것)을 리턴함
//sort()
numbers.sort((a, b) => {
  return a > b ? 1 : -1;
});
console.log(numbers);

//reverse()
numbers.sort((a, b) => {
  return a > b ? -1 : 1;
});
console.log(numbers);

//문자는 유니코드 순으로!
let sArr = ["cc", "aa", "AA", "CC"];
sArr.sort((a, b) => {
  return a > b ? 1 : -1;
});
console.log(sArr);

sArr.sort((a, b) => {
  return a > b ? -1 : 1;
});
console.log(sArr);

//map()함수
console.log(
  ineMember.map((x) => {
    if (x === "정현희") {
      return `${x} 안녕`;
    } else {
      return `${x} 잘가`;
    }
  })
);

//filter() 함수 : 조건이 참인 것의 배열요소를 리턴한다.
//let numbers =[1, 9, 7, 5, 5, 3];
//3의 배수인 것 결과 3 9 출력하기
console.log(numbers);
console.log(numbers.filter((x) => x % 3 === 0));

// let sArr=['cc', 'aa', 'AA', 'CC'];
console.log(sArr.filter((x) => x.toUpperCase() === "AA"));

//find() 이용해서 '오주희' 찾아보기
console.log(ineMember);
console.log(ineMember.find((name) => name === "오주희"));
console.log(ineMember.find((name) => name === "김주희"));

//오주희의 인덱스 번호를 찾고싶다. -> 답은 4
console.log(ineMember.findIndex((name) => name === "오주희"));

//let numbers=[1, 9, 7, 5,5 3]; 모두 곱하세요
console.log(numbers.reduce((a, b) => a * b, 1));
