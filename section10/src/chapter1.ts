//# Partial <T>
//# 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumnailURL?: string;
}

//% Partial<T> 직접 만들어보기
type Partial<T> = {
  //? 맵드 타입을 활용
  [key in keyof T]?: T[key];
};

const draft: Partial<Post> = {
  title: "Draft",
  content: "Draft Content",
};

//# Required<T>
//# 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입

type Required<T> = {
  [key in keyof T]-?: T[key];
};

const withThumbnailPost: Required<Post> = {
  title: "한입 타스 후기",
  tags: ["ts"],
  content: "타입스크립트는 좋아요",
  thumnailURL: "https://...",
};

//# Readonly<T>
//# 읽기전용. 수정불가.
//# 특정 객체 타입의 모든 프로퍼티를 읽기 전용 프로퍼티로 바꿔주는 타입

type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};

const readonlyPost: Readonly<Post> = {
  title: "보호된 게시글입니다.",
  tags: ["ts"],
  content: "타입스크립트",
};
