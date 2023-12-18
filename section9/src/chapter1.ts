//# 분산적인 조건부 타입
//# 조건부 타입에 유니온 타입을 할당하게 되면, 분배 법칙에 의해 조건부 타입이 분산된다.

type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;
let b: StringNumberSwitch<string>;
let c: StringNumberSwitch<number | string>;
//? StringNumberSwitch<number> => string
//? StringNumberSwitch<string> => number

let d: StringNumberSwitch<boolean | number | string>;
//% 1 단계
//% StringNumberSwitch<boolean> |
//% StringNumberSwitch<number> |
//% StringNumberSwitch<string>

//% 2단계
//% number
//% string
//% number

//% 결과
//% number | string

//# 실용적인 예제1

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
//% 1단계
//% Exclude<number, string> |
//% Exclude<string, string> |
//% Exclude<boolean, string>

//% 2단계
//% number
//% never
//% boolean

//% 결과
//% number | boolean

//# 실용적인 에제2

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;

//% 1단계
//% Extract<number, string> |
//% Extract<string, string> |
//% Extract<boolean, string>

//% 2단계
//% never
//% string
//% never

//% 결과
//% string
