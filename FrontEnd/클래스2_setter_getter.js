class Member {
  //인스턴스 클래스
  name;
  score;
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  get nameAndScore() {
    //출력 용도
    return `${this.name}은 ${this.score}입니다.`;
  }

  set setName(name) {
    this.name = name;
  }
  set setScore(score) {
    this.score = score;
  }
}

const s1 = new Member("홍1", 100);
const s2 = new Member("홍2", 80);
const s3 = new Member("홍3", 90);
console.log(s1.nameAndScore);
// console.log(s2.nameAndScore());// 에러발생함 -> 함수가 아님
console.log(s3.nameAndScore);

// s1.setName("김1");//에러발생
s2.setScore = 85;

console.log(s1);
console.log(s2);
