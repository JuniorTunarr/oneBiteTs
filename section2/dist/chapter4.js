//# 타입 별칭 (Type Aliases)
//# 공통적으로 적용될 여지가 있는 타입들은 별도로 타입을 별칭으로 지정해서 사용할 수 있음
let user1 = {
    id: 1,
    name: "chihyun",
    nickname: "JuniorTunarr",
    birth: "1995.11.02",
    bio: "Hello!",
    location: "Seoul",
};
//! 주의사항
function func() {
}
let countryCodes = {
    Korea: "ko",
    UnitedStates: "en",
    UnitedKingdom: "en",
    China: "cn",
    Japan: "jp",
};
let countryNumberCodes = {
    Korea: 410,
    UnitedState: 840,
    UnitedKingdom: 826,
    China: 156,
    Japan: 392,
};
//! 주의사항
//! [key: string]: number; 규칙만 지킨다면 에러를 발생시키지 않음
//! {}도 허용됨
let countryNumberCodes1 = {};
export {};
