// 배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello", "im", "chihyun"];

// 제너릭 방식(조금 더 복잡)
let boolArr: Array<boolean> = [true, false, true];

// 배열에 있는 요소의 타입이 다양할 경우
let multiArr: (string | number | boolean)[] = [1, 2, "hello", true];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

// 튜플: 배열 메소드 사용시 배열로 인식하여 따로 오류를 뱉지않음(push, pop 등) => 조심해서 사용
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "hey", true];

const users: [string, number][] = [
  ["이정환", 1],
  ["김아무개", 1],
  ["최아무개", 1],
  ["박아무개", 1],
  //[5, "노아무개"]
];
