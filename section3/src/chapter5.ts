//# 타입 추론
//# 타입스크립트는 타입을 명시하지 않아도 코드를 실행하면서 타입을 추론해준다.
//# const가 아닌 웬만한 변수는 범용적인 사용을 위해 타입 넓히기를 통해 타입을 명시하지 않아도 추론해준다.

let a = 10; //% let a: number
let b = "hello"; //% let b: string
let c = {
  id: 1,
  name: "노치현",
  profile: {
    nickname: "JuniorTunarr",
  },
  urls: [],
};
//% let c: { id: number; name: string; profile: { nickname: string; }; urls: never[]; }

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true]; //% let one: number, let two: string, let three: boolean

function func(message: "hello") {
  return "hello";
}

let d; //% let d: any
d = 10; //% d: any => number
d.toFixed();
//! Property 'toUpperCase' does not exist on type 'number'.
//! d.toUpperCase();

d = "hello"; //% d: number => string
d.toUpperCase();
//! Property 'toFixed' does not exist on type 'string'.
//! d.toFixed();

//? const는 타입 추론을 통해 리터럴 타입을 가진다.
const num = 10; //% const num: 10. number 리터럴
const str = "hello"; //% const str: "hello". string 리터럴

let arr = [1, "string", true]; //% let arr: (string | number | boolean)[]
