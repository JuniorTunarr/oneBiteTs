//# 타입 단언
//# 타입 단언은 타입스크립트 컴파일러의 눈을 잠시 가리는 것이기에, 타입 단언을 남발하면 타입스크립트의 장점을 잃어버릴 수 있다.

type Person = {
  name: string;
  age: number;
};

//! Type '{}' is missing the following properties from type 'Person': name, age
//! let person: Person = {};
//!  let person: Person => let person 시, Property 'name' does not exist on type '{}'
//! person.name = "노치현";
//! let person: Person => let person 시, Property 'age' does not exist on type '{}'
//! person.age = 29;

type Person1 = {
  name: string;
  age: number;
};

//? as 키워드를 사용하여 타입 단언을 할 수 있다.
let person1 = {} as Person1;
person1.name = "노치현";
person1.age = 29;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "멍멍이",
  color: "검정색",
  breed: "진도",
} as Dog;

//# 타입 단언의 규칙
//# 값 as 단언 <- 단언식
//# A as B
//# A가 B의 슈퍼타입이거나, 서브타입이어야 한다.

let num1 = 10 as never; //% A가 B의 슈퍼타입
let num2 = 10 as unknown; //% A가 B의 서브타임

//! 'number' 타입을 'string' 타입으로 변환하는 것은 오류일 수 있다. 두 타입이 충분히 겹치지 않기 때문에 의도적이라면 표현식을 'unknown'으로 먼저 변환해야한다.
//! let num3 = 10 as string;

let num4 = 10 as unknown as string; //% 다중단언: number -> unknown -> string 타입으로 변환. unknown타입이 슈퍼타입이므로 가능하다. 다중단언은 되도록 사용하지 않는 것이 좋다.

//# const 단언

let num5 = 10 as const;

let cat = {
  name: "냥냥이",
  color: " yellow",
} as const;

//! readOnly이므로 변경 불가능
//! cat.name = ""

//# Non Null 단언

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "노치현",
};

//! author가 undefined일 수 있으므로, 옵셔널 체이닝을 사용하여 undefined일 경우 undefined를 반환하도록 한다.
//! const len: number = post.author?.length;

//? Non Null 단언을 사용하여, author가 undefined가 아님을 단언한다.
const len: number = post.author!.length;
const len1: number = (post.author as string).length;
