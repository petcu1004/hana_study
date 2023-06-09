class Member {
  #name; //#은 private에 해당됨, 접근 제한자가 자신 클래스만 되는 것.
  year;
  constructor(name, year) {
    this.#name = name;
    this.year = year;
  }

  get name() {
    return `${this.#name}`;
  }
}

const iM = new Member("홍길동", 2000);
console.log(iM); //year: 2000
// console.log(iM.name);

console.log("1.---------------------------");
class Member1 {
  name;
  year;
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

//상속
class FemaleMember extends Member1 {
  work() {
    return `여자 멤버는 UI를 합니다`;
  }
}

class MaleMember extends Member1 {
  work1() {
    return `남자 멤버는 DB를 합니다`;
  }
}

const ifm = new FemaleMember("정현희", 2000);
const im = new MaleMember("홍길동", 2001);
console.log(ifm);
console.log(im);
console.log(ifm.work());
console.log(im.work1());

//ifm 변수는 Member1 클래스의 인스턴스(객체)를 가리킬 수 있나요
console.log(ifm instanceof Member1);
console.log(im instanceof Member1);
console.log(ifm instanceof FemaleMember);
console.log(im instanceof MaleMember);
console.log(ifm instanceof MaleMember);

console.log("2.--------super 부모 클래스의 멤버를 가리킴override------");
class Member2 {
  name;
  year;
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  sayHello() {
    return `안녕하세요 ${this.name}입니다`;
  }
}

class MemberChild extends Member2 {
  part;
  constructor(name, year, part) {
    super(name, year); //부모 생성자 호출
    this.part = part;
  }

  sayHello() {
    return `안녕하세요 자식클래스입니다.${this.name}, ${this.year}, ${this.part}`;
  }
}
const m2 = new Member2("부모명", 2000);
const mc2 = new MemberChild("자식명", 2001, "개발");

console.log(m2);
console.log(mc2);
console.log(m2.sayHello());
console.log(mc2.sayHello());
