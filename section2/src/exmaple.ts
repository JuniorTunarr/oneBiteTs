//# Quiz1: 다양한 배열 타입
type Nums = number[];
type Colors = string[];
type Coords = [number, number];
type Info = [string, number];

//# Quiz2: 타입 별칭(Type Alias)
//# 변수를 선언하듯 타입을 별도로 정의할 수 있음

type Course = {
  name: string;
  price: number;
  student_cnt: number;
  author: string;
  related_courses: string[];
};

//! 주의사항: 함수 내부에서만 적용되는 같은 이름의 타입을 지정할 수 있음
function func() {
  type Course = {};
}

//# Quiz3: 인덱스 시그니처(Index Signatures)
//# 반복될 여지가 있는 동일한 객체들의 타입을 유연하게 정의할 수 있는 문법.  {[key : T] : U}} 형식

type User = {
  [key: string]: string;
  name: string;
  email: string;
};

//! 주의사항: [key: string]: number; 규칙만 지킨다면 에러를 발생시키지 않아서 {} 도 허용됨.
type CountryNumberCodes = {
  [key: string]: number;
};
let countryNumberCodes: CountryNumberCodes = {};

//? 필수로 들어가는 프로퍼티 지정시 {}를 허용하지 않을 수 있음. But, type을 호환시켜야함(number면 number, string이면 string)
type CountryNumberCodes1 = {
  [key: string]: number;
  Korea: number; // string이면 에러 발생
};
