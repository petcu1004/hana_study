//class 클래스
//붕어빵 틀, 객체를 만들기 위한 틀 (설계도)

class Member {
  //멤버
  name;
  year;

  //생성자
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  //메서드
  sayName() {
    return `안녕하세요 저는 ${this.name}입니다. 태어난 년도는 ${this.year}입니다`;
  }
}

const hongClass = new Member("홍길동", 2000);
const leeClass = new Member("이순신", 2002);
const jungClass = new Member("정현희", 203);
const parkClass = new Member("박주민", 2004);

console.log(hongClass);
console.log(leeClass.name);
console.log(jungClass.sayName());
console.log(typeof parkClass);
