//# 조건부 타입
//# 삼항 연산자를 사용한 조건부 타입
//? 제네릭과 잘 활용됨

type A = number extends string ? string : boolean;

//% 객체
type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};
type B = ObjB extends ObjA ? number : string;

//# 제네릭과 조건부 타입

type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>;

let varB: StringNumberSwitch<string>;

//% 다른 예제

//? 오버로드 시그니처
function removeSpaces<T>(text: T): T extends string ? string : undefined;

function removeSpaces<T>(text: any) {
  if (typeof text === "string") {
    //! string 타입은 T extends string ? string : undefined에 할당할 수 없음 => as any로 해결은 가능
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result = removeSpaces("Hello World, I'm JuniorTunarr!");
result.toUpperCase();
let result2 = removeSpaces(undefined);
