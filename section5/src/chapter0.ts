//# 인터페이스
//# 타입에 이름을 지어주는 또 다른 문법
//# 객체의 구조를 정의하는데 특화된 문법
//# (상속, 합침 등의 특수한 기능을 제공함)

//% 인터페이스 작명시 IPerson 같이 I를 붙이는 방식은 헝가리안 표기법
//% 자바스크립트에서는 잘 사용하지 않으나, 팀 컨벤션에 따라가는게 좋음

interface Person {
  readonly name: string;
  age?: number;
  //! 아래처럼 호출 시그니처만 정의하면 함수타입으로 인지되므로, 별도로 이름을 지정해줘야함
  sayHi(): void;
  sayHi(a: number, b: number): void; //! 함수 표현식으로는 오버로딩이 불가능함
}

type Type1 = number | string | Person;
type Type2 = number & string & Person;

const person: Person = {
  name: "치현",
  age: 29,
  sayHi: function () {
    console.log("Hi");
  },
};

person.sayHi();
person.sayHi(1, 2);
