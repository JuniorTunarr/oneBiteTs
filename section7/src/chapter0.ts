//# 제네릭(Generic)
//# 함수계의 종합병원
//# 파라미터에 따라 반환되는 타입이 달라지는 함수를 구현할 때 사용한다.

//^ <T>: 타입 변수

//% 제네릭 함수
function func<T>(value: T): T {
  return value;
}

let num = func(10);

let bool = func(true);

let str = func("string");

//? 꺾쇠 안에 타입을 명시해주면, 파라미터와 결과 값에 동일한 타입이 적용되게 만들 수 있다.
let arr = func<[number, number, number]>([1, 2, 3]);
