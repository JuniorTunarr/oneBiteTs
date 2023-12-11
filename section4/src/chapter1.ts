//# 함수 타입 표현식
//# 함수의 인자와 반환 값의 타입을 정의하는 방식

type Operation = (a: number, b: number) => number;

const add: (a: number, b: number) => number = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

//# 호출 시그니처(콜 시그니처)
//# 함수 타입 표현식과 유사하나, 객체의 프로퍼티처럼 사용될 수 있다

//% 마치 객체의 프로퍼티처럼 생겼지만, 함수의 타입을 정의하는 것
type Operation1 = {
  (a: number, b: number): number;
  name: string;
};

const add1: Operation1 = (a, b) => a + b;
const sub1: Operation1 = (a, b) => a - b;
const multiply1: Operation1 = (a, b) => a * b;
const divide1: Operation1 = (a, b) => a / b;
