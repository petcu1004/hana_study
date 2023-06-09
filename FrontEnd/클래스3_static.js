class SMember {
  name;
  year;
  static groupName = "하나은행";

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  static returnGroupName() {
    return "알파코";
  }
}

console.log(SMember.groupName);
console.log(SMember.returnGroupName());

class SMember2 {
  name;
  year;
  static groupName = "하나은행";

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  static returnGroupName() {
    return "알파코";
  }

  static fromObject(object) {
    return new SMember(object.name, object.year);
  }

  static fromList(list) {
    return new SMember(list[0], list[1]);
  }
}

const hong1 = SMember2.fromObject({ name: "홍길동", year: 2000 });
console.log(hong1);

const lee2 = SMember2.fromList(["이순신", 2300]);
console.log(lee2);
