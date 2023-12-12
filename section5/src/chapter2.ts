//# 선언 합침(Declaration Merging)

//!
//type Person = {
//  name: string;
//}

//type Person {
//  age: number;
//}

//! type는 두번 선언하면 에러가 나지만, interface는 합쳐짐

interface Person1 {
  name: string;
}
interface Person1 {
  //! 서브타입도 재정의가 허용되지 않음
  age: number;
}

const person: Person1 = {
  name: "치현",
  age: 29,
};

//# 모듈 보강

interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello",
};
