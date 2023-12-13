//# 클래스

let studentA = {
  name: "치현",
  grade: "A+",
  age: 29,
  study() {
    console.log("열심히 공부중");
  },
  introduce() {
    console.log("안녕하세용!");
  },
};

//let studentB = {
//  name: "길동이",
//  grade: "C+",
//  age: 28,
//  study() {
//    console.log("열심히 공부중");
//  },
//  introduce() {
//    console.log("안녕하세용!");
//  },
//};

//% 클래스는 파스칼 케이스로 작성한다.
class Student {
  //^ 필드
  name;
  grade;
  age;

  //^ 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  //^ 메서드
  study() {
    console.log("열심히 공부중");
  }
  introduce() {
    console.log(`안녕하세용! ${this.name}입니다.`);
  }
}

//% 인스턴스 생성
//% Student라는 객체를 new 키워드를 통해 생성한다.
let studentB = new Student("치현", "A+", 29);
console.log(studentB);
studentB.study();
studentB.introduce();

class StudentDeveloper extends Student {
  //^ 필드
  favoriteSkill;

  //^ 생성자
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }
  //^ 메서드
  programming() {
    console.log(`저는 ${this.favoriteSkill}를 좋아합니다.`);
  }
}
const studentDeveloper = new StudentDeveloper("치현", "A+", 29, "TypeScript");
console.log(studentDeveloper);
studentDeveloper.programming();
