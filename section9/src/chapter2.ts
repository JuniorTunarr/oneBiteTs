//# infer

type FuncA = () => string;
type FuncB = () => number;

//? 조건식이 true일 때, infer 키워드를 사용한 타입이 반환 타입이 된다.
type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>;

type B = ReturnType<FuncB>;

//! 추론 불가시 never;
type C = ReturnType<number>;

//# 예제

type PromiseUnpack<T> = T extends Promise<infer K> ? K : never;
//% 1. T는 프로미스 타입이어야 한다.
//% 2. 프로미스 타입의 결과값 타입을 반환해야 한다.

//? PromiseUnpack: Promise<T>의 T를 추출하는 타입
type PromiseA = PromiseUnpack<Promise<number>>;
//% number

type PromiseB = PromiseUnpack<Promise<string>>;
//% string
