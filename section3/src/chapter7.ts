//# 타입 좁히기 (Narrowing Types)
//# 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
//# 타입을 상황에 따라 좁히는 방법

type Person = {
  name: string;
  age: number;
};

//% value => number: toFixed
//% value => string: trim, toUpperCase, toLowerCase
//% value => Date: getTime, toDateString, toTimeString
//% value => Person: name은 age살 입니다.

function func(value: number | string | Date | null | Person) {
  value;
  //! string|number 형식에 'toUpperCase' 속성이 없습니다.
  //! value.toUpperCase();
  //! string|number 형식에 'trim' 속성이 없습니다.
  //! value.trim();

  //? 타입 가드
  //? 타입스크립트가 타입을 좁혀나가는 과정
  if (typeof value === "number") {
    value.toFixed(2);
  } else if (typeof value === "string") {
    value.trim();
  } else if (value instanceof Date) {
    //? Date는 node에 저장되어있는 내장객체로, instanceof를 사용하여 타입을 좁힐 수 있다.
    //! typeof value === "object"
    //! value는 null일 수도 있다.
    //! value.getTime();
    value.getTime();
  } else if (value && "age" in value) {
    //! Person 타입은 사용자가 직접 만든 타입이므로, typeof나 instanceof를 사용할 수 없다.
    //! Person 타입은 name과 age를 가지고 있으므로, in 연산자를 사용하여 타입을 좁힐 수 있다.
    //! value가 null이 될 수도 있으므로, null 체크를 해줘야한다.
    console.log(`${value.name}은 ${value.age}살 입니다.`);
  }
}
