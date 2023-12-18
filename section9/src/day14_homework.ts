//# Quiz 1

//% 다음 요구사항을 만족하는 IsProductKey 타입을 완성하세요
//%
//% IsProductKey 타입은 조건부 타입으로 다음 조건에 따라 각각 다른 타입으로 결정됩니다.
//% - T가 Product의 key(프로퍼티 이름)중 하나일 경우 결과는 true 타입이 됩니다.
//% - T가 Product의 key(프로퍼티 이름)중 하나가 아닐 경우 결과는 false 타입이 됩니다.
//% - 예를 들면 다음과 같습니다.
//%   - ex) IsProductKey<"id"> 타입은 true 타입이 됩니다.
//%   - ex) IsProductKey<"author"> 타입은 false 타입이 됩니다.

interface Product {
  id: number;
  name: string;
  price: number;
  seller: {
    id: number;
    name: string;
    company: string;
  };
}

//# Answer 1

type IsProductKey<T> = T extends keyof Product ? true : false;

type Ex1 = IsProductKey<"id">; // true
type Ex2 = IsProductKey<"location">; //false

//# Quiz 2

//% 다음 조건을 만족하는 Extract<T, U> 타입을 구현하세요
//%
//% Extract<T, U> 타입은 T로부터 U만 추출하는 타입입니다.
//% - ex) Extract<string | boolean, boolean>은 boolean 타입이 됩니다.
//% - ex) Extract<number | string, string>은 string 타입이 됩니다.
//% (힌트💡 강의 중 직접 구현하는 Exclude 타입의 반대라고 생각해보세요!)

//# Answer 2

type Extract<T, U> = T extends U ? T : never;

type Ex3 = Extract<string | boolean, boolean>; // boolean
type Ex4 = Extract<number | string, string>; // string

//# Quiz 3

//% 배열 타입의 요소를 추출하는 InferArrayType 타입을 구현하세요

//# Answer 3

type InferArrayType<T> = T extends Array<infer K> ? K : never;

type Ex5 = InferArrayType<number[]>; // number
type Ex6 = InferArrayType<string[]>; // string
