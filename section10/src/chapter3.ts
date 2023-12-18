//# 복습 시간

//# Exclude<T, U>
//# T 타입에서 U 타입에 할당 가능한 타입을 제거한다.

//% Exclude 타입 구현해보기
type Exclude<T, U> = T extends U ? never : T;

//% 1단계
//% Exclude<string | boolean> |
//% Exclude<boolean | boolean>

//% 2단계
//% string |
//% never

//% 결과
//% string

type A = Exclude<string | boolean, boolean>;

//# Extract<T, U>
//# T 타입에서 U 타입에 할당 가능한 타입을 추출한다.

//% Extract 타입 구현해보기
type Extract<T, U> = T extends U ? T : never;

type B = Extract<string | boolean, boolean>;

//# ReturnType
//# 함수 타입의 반환 타입을 추출한다.

//% ReturnType 타입 구현해보기
type ReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : never;

function funcA() {
  return "hello";
}

function funcB() {
  return 10;
}

type ReturnA = ReturnType<typeof funcA>;
type ReturnB = ReturnType<typeof funcB>;
