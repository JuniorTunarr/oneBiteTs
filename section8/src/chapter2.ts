//# keyof 연산자
//# 객체 타입에서 키를 추출할 수 있게 해주는 연산자

//interface Person {
//  name: string;
//  age: number;
//}

//? typeof 연산자를 이용하면, 객체의 타입을 추측할 수 있음
type Person = typeof person;

//! person: Person, key: "name" | "age": 객체의 모든 프로퍼티를 지정할 수 없기에 유니온 타입을 이용하는 것은 비효율적
//? keyof 연산자를 이용하면 Person이라는 객체의 모든 프로퍼티를 유니온 타입으로 추출할 수 있음
//? 타입에만 사용 가능하며, 값에는 사용 불가능
function getPropertyKey(person: Person, key: keyof typeof person) {
  return person[key];
}

const person = {
  name: "치현",
  age: 29,
};

getPropertyKey(person, "name"); //& "치현"
