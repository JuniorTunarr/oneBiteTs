//# Quiz1

//# 타입 단언을 이용해 person 변수에 빈 객체를 할당하세요
//# (힌트. 초과 프로퍼티 검사 방지를 위한 타입 단언)

type Person = {
  name: string;
  age: number;
};

//? Answer

let person = {} as Person;
person.name = "치현";
person.age = 29;

//# Quiz2
//# 타입 단언을 이용해 함수 호출에서의 오류를 해결하세요
//# (힌트. const 단언)

let value = 10;
//! 'number' 타입의 인수는 '10' 타입의 매개변수에 할당할 수 없다.
//! giveMe10(value);

function giveMe10(value: 10) {
  return value;
}

//? Answer

let value1 = 10 as const;

//# Quiz3
//# 다음 요구사항을 만족하는 코드를 작성하세요
//# - CompanyMember 타입을 Boss와 Employee의 서로소 유니온 타입으로 정의하세요

type Boss = {
  car: string;
};

type Employee = {
  salary: number;
};

type CompanyMember = Employee | Boss;

//? Answer

type Boss1 = {
  type: "BOSS";
  car: "string";
};

type Employee1 = {
  type: "EMPLOYEE";
  salary: number;
};
type CompanyMember1 = Employee1 | Boss1;
