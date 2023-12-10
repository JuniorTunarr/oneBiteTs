//# 기본 타입간의 호환성

let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

//# 객체 타입간의 호환성
//? 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?

type Animal = {
  name: string;
  color: string;
};

//% 서브타입
type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "겨울이",
  color: "white",
  breed: "포메라니안",
};

//? 업캐스팅 가능
animal = dog;

//! 다운캐스팅 불가능
//! Property 'breed' is missing in type 'Animal' but required in type 'Dog'.

//! dog = animal;

type Book = {
  name: string;
  price: number;
};

type ProgrammerBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammerBook = {
  name: "한 입 크기로 잘라먹는 타입스크립트",
  price: 33000,
  skill: "TypeScript",
};

//? 업캐스팅 가능
book = programmingBook;

//! 다운캐스팅 불가능
//! programmingBook = book;

//# 초과 프로퍼티 검사

type Book1 = {
  name: string;
  price: number;
};

let book2: Book1 = {
  name: "한 입 크기로 잘라먹는 타입스크립트",
  price: 33000,
  //! 타입정의 했던 객체의 프로퍼티만 사용가능
  //! skill: "TypeScript" /
};

let book3: Book = programmingBook;
function func(book: Book) {}
func({
  name: "한 입 크기로 잘라먹는 타입스크립트",
  price: 33000,
  //! skill: "TypeScript"
});
//? 초과 프로퍼티 검사를 피하려면, 변수로 저장해뒀다가 인수로 전달해야함
func(programmingBook);
