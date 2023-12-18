//# 인덱스드 액세스 타입
//# 인덱스드 액세스 타입은 인덱스 시그니처를 이용해서 객체의 인덱스에 접근할 때 해당 인덱스의 반환 타입을 지정하는 방식
//# 객체, 배열, 튜플 타입에서 특정 프로퍼티 혹은 요소의 타입을 추출하는 타입

//^ 1. 객체

interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
    location?: string;
  };
}

function printAuthorInfo(author: Post["author"]) {
  console.log(`${author.name}-${author.id}`);
}

const post: Post = {
  title: "Hello TypeScript & React",
  content: "TypeScript & React is Good",
  author: {
    id: 1,
    name: "치현",
    age: 29,
  },
};

//^ 2. 배열

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
    location?: string;
  };
}[];

//^ 인덱스드 액세스 타입: Post["author"]. author의 타입만 추출
//! 주의사항 1: 타입만 명시가능
//! 주의사항 2: 존재하지 않는 프로퍼티는 당연히 접근 불가
//? author: Post["author"]["id"] => 이런식으로 특정 필드만 추출 가능

function printAuthorInfo1(author: PostList[number]["author"]) {
  console.log(`${author.name}-${author.id}`);
}

//? 아래 [0]은 숫자 리터럴임. 타입만 들어갈 수 있음을 까먹지 말 것
const post1: PostList[0] = {
  title: "Hello TypeScript & React",
  content: "TypeScript & React is Good",
  author: {
    id: 1,
    name: "치현",
    age: 29,
  },
};
printAuthorInfo(post1.author);

//^ 3. 튜플

type Tup = [number, string, boolean];

type Tup0 = Tup[0]; //% number
type Tup1 = Tup[1]; //% string
type Tup2 = Tup[2]; //% boolean

//! error: 존재하지 않는 타입은 사용할 수 없음
//! type Tup3 = Tup[3];
