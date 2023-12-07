//# 타입 별칭 (Type Aliases)
//# 공통적으로 적용될 여지가 있는 타입들은 별도로 타입을 별칭으로 지정해서 사용할 수 있음

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user1: User = {
  id: 1,
  name: "chihyun",
  nickname: "JuniorTunarr",
  birth: "1995.11.02",
  bio: "Hello!",
  location: "Seoul",
};

//! 주의사항

function func() {
  type User = {}; //! 함수 내부에서만 적용되는 같은 이름의 타입을 지정할 수 있음
}

//# 인덱스 시그니처(Index Signatures)
//# key와 value의 규칙을 기준으로 객체의 타입을 정의할 수 있음

//type CountryCodes = {
//  Korea: string;
//  UnitedStates: string;
//  UnitedKingdom: string;
//  China: string;
//  Japan: string;
//}
type CountryCodes = {
  [key: string]: string;
};

let countryCodes = {
  Korea: "ko",
  UnitedStates: "en",
  UnitedKingdom: "en",
  China: "cn",
  Japan: "jp",
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number; //? 필수로 들어가는 프로퍼티를 지정했을 시, {}를 허용하지 않을 수 있음. But, type을 호환시켜야함(number면 number, string이면 string)
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
  China: 156,
  Japan: 392,
};
//! 주의사항
//! [key: string]: number; 규칙만 지킨다면 에러를 발생시키지 않음
//! {}도 허용됨

let countryNumberCodes1: CountryNumberCodes = {};
