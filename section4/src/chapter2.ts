//# 함수 타입 호환성
//# 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단
//# 1. 반환값의 타입이 호환되는가
//# 2. 매개변수의 타입이 호환되는가

//@ 기준1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;
//! 다운캐스팅 불가능. A 타입은 B 타입으로 할당할 수 없다. 'number' 타입은 '10' 형식에 할당할 수 없다.
//! b = a;

//@ 기준2. 매개변수가 호환되는가
//@ 2-1. 매개변수의 개수가 같을 때

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

//! 업캐스팅 불가능. D 형식은 C 형식에 할당할 수 없다. 'value' 및 'value'의 매개변수 형식이 호환되지 않는다.
//! c = d;
d = c;

type Animal = {
  name: string;
};
type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

//! (dog: Dog) => void 형식은 (animal: Animal) => void 형식에 할당할 수 없다. 'color' 속성이 'Animal' 형식에 없다.
//! animalFunc = dogFunc;

let testFunc = (animal: Animal) => {
  console.log(animal.name);
  //! 'color' 속성이 'Animal' 형식에 없다.
  //! console.log(animal.color);
};

let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
};

//@ 2-2 매개변수의 개수가 다를 때
//# 당연히 타입은 같아야함.

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
//! Func1 형식은 Func2 형식에 할당할 수 없다. 'b' 매개변수가 필요하고 'Func2' 형식은 '1'개의 매개변수만 허용한다.
//! func2 = func1;
