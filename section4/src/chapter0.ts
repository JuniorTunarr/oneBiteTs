//# 함수 타입 정의

//% 함수를 설명하는 가장 좋은 방법
//% 어떤 매개변수를 받고, 어떤 결과를 반환하는 이야기
//% 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과를 반환하는지 이야기
function func(a: number, b: number) {
  return a + b;
}

//# 화살표 함수의 타입을 정의하는 방법

const add = (a: number, b: number) => a + b;

//# 함수의 매개변수

function introduce(name = "치현", age: number, tall?: number) {
  console.log(`name: ${name}`);
  console.log(`age: ${age}`);
  if (typeof tall === "number") console.log(`tall: ${tall + 10}`);
}
introduce("치현", 29);

function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((n) => (sum += n));
  return sum;
}

getSum(1, 2, 3);

function getSum1(...rest: [number, number, number]) {
  let sum = 0;
  rest.forEach((n) => (sum += n));
  return sum;
}
//! 3개의 인자만 받을 수 있음
//! getSum1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
