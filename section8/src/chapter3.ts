//# 맵드 타입
//# 맵드 타입은 기존에 정의되어 있는 타입을 새로운 타입으로 변환해주는 문법

//? 맵드타입은 인터페이스에서 사용이 불가능하며, 타입 별칭에서만 사용 가능

//^ 활용도가 높고, 실무에서도 자주 쓰이는 문법이므로 반드시 숙지해야 함

interface User {
  id: number;
  name: string;
  age: number;
}
//% 맵드 타입이 필요한 경우: User와 타입이 같은데, 인터페이스를 재정의하는 불필요한 반복을 줄이고 싶을 때
//interface PartialUser {
//  id?: number;
//  name?: string;
//  age?: number;
//}

type PartialUser1 = {
  //? key = value 형태
  //? key가 "id"일 때, User["id"]의 타입을 value로 지정
  //? ?를 마지막에 붙여주면, 해당 프로퍼티가 선택적 프로퍼티임을 명시
  [key in "id" | "name" | "age"]?: User[key];
};

type BooleanUser = {
  [key in keyof User]: boolean;
};

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

//% 한명의 유저 정보를 불러오는 기능
function fetchUser(): User {
  //^ ... 기능
  return {
    id: 1,
    name: "치현",
    age: 29,
  };
}
//% 한명의 유저 정보를 수정하는 기능
function updateUser(user: User) {
  // 수정하는 기능
}

updateUser({
  id: 1,
  name: "치현",
  age: 29,
});
