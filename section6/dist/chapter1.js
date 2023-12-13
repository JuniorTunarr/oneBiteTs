//# 타입스크립트의 클래스
const employee = {
    name: "치현",
    age: 29,
    position: "front-end developer",
    work() {
        console.log("취업 준비중");
    },
};
//? tsconfig.json 내 any 타입 허용 옵션(기본값 true)
//? noImplicitAny: false
class Employee {
    //%  필드
    name;
    age;
    position;
    //% 생성자
    constructor(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
    //% 메서드
    work() {
        console.log("취업 준비중");
    }
}
//! super를 작성하지 않으면 상속의 의미가 없기때문에 에러가 발생한다.
class ExecutiveOfficer extends Employee {
    //% 필드
    officeNumber;
    //% 생성자
    constructor(name, age, position, officeNumber) {
        super(name, age, position);
        this.officeNumber = officeNumber;
    }
}
const employeeB = new Employee("치현", 29, "front-end developer");
console.log(employeeB);
//? 타입스크립트에서는 클래스는 타입으로도 활용할 수 있다.
const employeeC = {
    name: "",
    age: 0,
    position: "",
    work() { },
};
export {};
