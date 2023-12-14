//# 타입 변수 응용하기

//# Ex1

function swap<T>(a: T, b: T) {
  return [b, a];
}

//! 'number' 형식의 인수는 'string' 형식의 매개 변수에 할당될 수 없습니다.
//! const [a, b] = swap("1", 2);

//? 필요할 땐 여러 개의 타입 변수를 선언할 수 있다.
function swap1<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap1("1", 2);

//# Ex2

function returnFirstValue<T>(data: T) {
  //! '0'형식의 식을 'unknown' 인덱스 형식에 사용할 수 없으므로 요소에 암시적으로 'any' 형식을 가진다.
  //! return data[0];
}

let num = returnFirstValue([1, 2, 3]); //& result: 1

let str = returnFirstValue(["a", "b", "c"]); //& result: "a"

//? rest 파라미터를 사용하면, 타입 변수를 배열의 요소로 지정할 수 있다.
function returnFirstValue1<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num1 = returnFirstValue1([1, 2, 3]); //& result: 1

let str1 = returnFirstValue1([1, "b", "c"]); //& result: 1

//# Ex3

//? 타입 변수에는 extends 키워드를 사용해 확장할 수도 있다.
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]); //& result: 3

let var2 = getLength("12345"); //& result: 5

let var3 = getLength({ length: 10 }); //& result: 10

//! 'number' 형식의 인수는 '{ length: number; }' 형식의 매개 변수에 할당될 수 없습니다.
//! let var4 = getLength(10);
