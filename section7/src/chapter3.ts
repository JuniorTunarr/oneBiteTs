//# 제너릭 인터페이스

interface KeyPair<K, V> {
  key: K;
  value: V;
}

let keyPair: KeyPair<string, number> = { key: "one", value: 1 };

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1", "2", "3"],
};

//# 인덱스 시그니처

interface NumberMap {
  [key: string]: number;
}

let numberMap1: NumberMap = {
  one: 1,
  two: 2,
  three: 3,
};

interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "value",
};

let booleanMap: Map<boolean> = {
  key: true,
};

//# 제네릭 타입 별칭

type Map2<V> = { [key: string]: V };

let stringMap2: Map2<string> = {
  key: "hello, bye",
};

//# 제네릭 인터페이스의 활용 예시

//% 유저 관리 프로그램
//% 유저 구분: 학생 유저 / 개발자 유저

interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User1 {
  name: string;
  profile: Student | Developer;
}
interface User<T> {
  name: string;
  profile: T;
}

const developerUser: User<Developer> = {
  name: "치현",
  profile: {
    type: "developer",
    skill: "TypeScript",
  },
};

const studentUser: User<Student> = {
  name: "길동",
  profile: {
    type: "student",
    school: "한국디지털대학교",
  },
};

function goToSchool(user: User<Student>) {
  const school = user.profile.school;
  console.log(`${user.name}님은 ${school}에 다닙니다.`);
}

//! User<Developer> 형식의 인수는 User<Student> 형식의 매개 변수에 할당될 수 없습니다.
//! goToSchool(developerUser)
