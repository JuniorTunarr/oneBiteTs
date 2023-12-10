//# 대수 타입
//# => 여러개의 타입을 합성해서 새롭게 만들어낸 타입
//# => 합집합 타입과 교집합 타입이 존재한다.

//# 1. 합집합 - Union Type

let a: string | number;
a = 1;
a = "hello";

//! Type 'boolean' is not assignable to type 'string | number'.
//! a = true;

let a1: string | number | boolean;
a1 = true;

let arr: (number | string | boolean)[] = [1, 2, 3, "hello", true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

//! Type '{ name: string; }' is not assignable to type 'Union1'.
//! 유니언 타입 밖의 경우.

//! let union4: Union1 = {
//!  name: "",
//! }

//# 2. 교집합 타입 - Intersection Type

let variable: number & string;

type Dog1 = {
  name: string;
  color: string;
};

type Person1 = {
  name: string;
  language: string;
};

type Intersection = Dog1 & Person1;

//! Type '{ name: string; color: string; }' is not assignable to type 'Intersection'.
//! 교집합은 두 타입의 모든 프로퍼티를 포함해야 한다.

//! let intersection1: Intersection = {
//!   name: "",
//!   color: "",
//! };
