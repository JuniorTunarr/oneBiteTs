//# Quiz1

//# 아래 코드의 변수 a,b,c,d,e의 타입은 각각 어떻게 추론될까요?

let a = 10;
const b = 20;
const c = [1, 2];
const d = [1, "hello", true];
const e = [1, 2, 3] as const;

//? Answer

type A = number; // number 타입
type B = 20;
type C = number[];
type D = (number | string | boolean)[];
type E = [1, 2, 3];

//# Quiz2

//# 다음 요구사항을 만족하는 Animal, DogCat(개냥이) 타입을 완성하세요

//# - Animal 타입은 Dog 타입일 수도 Cat 타입일 수도 있습니다.
//# - DogCat 타입은 Dog이자 Cat입니다.

type Dog = {
  name: string;
  color: string;
};

type Cat = {
  name: string;
  age: number;
};

//? Answer

type Animal = Dog | Cat; //? Animal 타입은 합집합(유니언) 타입
type DogCat = Dog & Cat; // ? DogCat 타입은 교집합(인터섹션) 타입
