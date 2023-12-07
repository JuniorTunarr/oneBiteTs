// object (객체 리터럴 타입)
// 객체 내 프로퍼티나 메서드에 타입 정의없이 접근하면 오류가 발생함
// 따라서 리터럴 타입으로 객체의 모든 프로퍼티 타입까지 구조적으로 다 정의함
// 타입스크립트는 구조적 Type 시스템. Propery Based
// C나 Java는 명목적 Type 시스템. Name Based
let user = {
    id: 1,
    name: "chihyun",
};
user = {
    name: "gildong",
};
let config = {
    apiKey: "MY API KEY",
};
export {};
//config.apiKey = "hacked";
