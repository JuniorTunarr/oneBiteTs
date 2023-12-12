//# Quiz1

//% 이미 작성되어 있는 3개의 오버로드 시그니쳐를 모두 만족해야 합니다.
//% a, b, c의 값을 모두 더한 값을 반환합니다.
//% 만약 매개변수의 값이 undefined일 경우 모두 0으로 취급합니다.
//% - a가 없을 경우 : 0
//% - b가 없을 경우 : 0
//% - c가 없을 경우 : 0

function add(): number;
function add(a: number): number;
function add(a: number, b: number, c: number): number;

//# Answer

function add(a?: number, b?: number, c?: number): number {
  return (a ?? 0) + (b ?? 0) + (c ?? 0);
}

//# Quiz2
//% 다음 요구사항을 만족하도록 사용자 정의 타입 가드를 완성하세요

//% isGuest 함수가 true를 반환하면 매개변수로 전달된 user는 Guest 타입임이 보장됩니다.
//% isMember 함수가 true를 반환하면 매개변수로 전달된 user는 Member 타입임이 보장됩니다.

type Guest = {
  visitCount: number;
};

type Member = {
  id: string;
};

type User = Guest | Member;

function isGuest(user: User) {}

function isMember(user: User) {}

//# Answer

function isGuest1(user: User): user is Guest {
  return (user as Guest).visitCount !== undefined;
}

function isMember1(user: User): user is Member {
  return (user as Member).id !== undefined;
}

//# Quiz3

//% 다음 조건을 만족하는 3가지 인터페이스를 추가로 구현하세요

//% 모든 인터페이스는 Person 인터페이스를 확장합니다(extends).
//% Student 인터페이스는 grade 프로퍼티를 갖습니다.
//% grade 프로퍼티에는 "A", "B", "C"만 저장할 수 있습니다.
//% Developer 인터페이스는 skills 프로퍼티를 갖습니다.
//% skills 프로퍼티에는 문자열 배열을 저장할 수 있습니다.
//% Boss 인터페이스는 company 프로퍼티를 갖습니다.
//% company 프로퍼티에는 문자열을 저장할 수 있습니다.

interface Person {
  name: string;
}

//# Answer

interface Student extends Person {
  grade: "A" | "B" | "C";
}

interface Developer extends Person {
  skills: string[];
}

interface Boss extends Person {
  company: string;
}
