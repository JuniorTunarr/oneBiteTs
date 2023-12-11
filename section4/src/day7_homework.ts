//# Quiz1

//@ 다음 요구사항을 만족하도록 introduce 함수의 매개변수의 타입을 정의하세요

//@ name 매개변수는 String 타입이며, "이정환" 이라는 기본값이 설정됩니다.
//@ tall 매개변수는 Number 타입이며, 선택적 매개변수 입니다.

function introduce(name = "치현", tall?: number) {
  if (!tall) {
    console.log(`안녕하세요 ${name}입니다!`);
  } else {
    console.log(`안녕하세요 ${name}입니다. 키는 ${tall}입니다`);
  }
}

//# Quiz2

//@ 함수 타입 표현식을 이용해 다음 요구사항을 만족하는 타입 Func를 정의하세요

//@ 2개의 매개변수 a와 b를 받습니다.
//@ 매개변수 a는 Number, b는 String 타입입니다.
//@ 반환값 타입은 boolean 입니다.

type Func = (a: number, b: string) => boolean;
