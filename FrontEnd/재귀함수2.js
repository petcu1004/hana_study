let company = {
  sales: [
    { name: "a", salary: 1000 },
    { name: "b", salary: 2000 },
    { name: "c", salary: 3000 },
  ],
  programmer: [
    { name: "d", salary: 8000 },
    { name: "e", salary: 9000 },
    { name: "f", salary: 7000 },
  ],
};

//급여의 합을 구하기
function sumSalaries(department) {
  if (Array.isArray(department)) {
    //첫번쨰인 경우
    return department.reduce((prev, current) => prev + current.salary, 0);
  } else {
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep);
    }
    return sum;
  }
}
sumSalaries(company);
console.log(sumSalaries(company));

const arr = [1, 2, 3, 4, 5];
const result = arr.reduce((acc, cur, idx) => {
  return (acc += cur);
}, 0);
// console.log(result);

//국어점수의 평균을 구하기
let school = {
  // 동일한 객체(간결성을 위해 약간 압축함)
  sales: [
    { name: "홍길동", kor: 100 },
    { name: "이순신", kor: 60 },
  ],
  development: {
    sites: [
      { name: "이수연", kor: 65 },
      { name: "최경미", kor: 80 },
    ],
    internals: [{ name: "오명인", kor: 73 }],
  },
};

// 국어 합계를 구해주는 함수
function sumKor(korjumsu) {
  if (Array.isArray(korjumsu)) {
    // 첫 번째 경우
    return korjumsu.reduce((prev, current) => prev + current.kor, 0); // 배열의 요소를 합함
  } else {
    // 두 번째 경우
    let sum = 0;
    for (let subkor of Object.values(korjumsu)) {
      sum += sumKor(subkor); // 재귀 호출로 각 하위 국어 점수를 구함
    }
    return sum;
  }
}

alert(sumKor(school));
