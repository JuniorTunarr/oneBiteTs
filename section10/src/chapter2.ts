//# Pick<T, K>
//# 객체 타입으로부터 특정 프로퍼티만 골라내어 타입을 정의한다.

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

//% 픽드 타입 만들어보기
type Pick<T, K extends keyof T> = {
  //? K extends 'title' | 'content' | 'thumbnailURL'
  //? 'title' | 'content' extends 'title' | 'tags' | 'content' | 'thumbnailURL'
  [key in K]: T[key];
};

const legacyPost: Pick<Post, "title" | "content"> = {
  title: "옛날 글",
  content: "옛날에 쓰던 글입니다.",
};

//# Omit<T, K>
//# 객체 타입으로부터 특정 프로퍼티만 제거하여 타입을 정의한다.

//% 오밋 타입 만들어보기
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
//? T = Post, K = "title"
//? Pick<Post, Exclude<keyof Post, "title">>
//? Pick<Post, Exclude<"title" | "tags" | "content" | "thumbnailURL", "title">>
//? Pick<Post, "tags" | "content" | "thumbnailURL">

const noTitlePost: Omit<Post, "title"> = {
  content: "",
  tags: [],
  thumbnailURL: "",
};

//^ 실무에서 굉장히 많이 쓰이는 타입
//# Record<K, T>
//# K 타입의 프로퍼티를 가진 T 타입의 객체를 정의한다.
//# K는 key, T는 value 객체 타입

type Thumbnail1 = {
  large: {
    url: string;
  };
  medium: {
    url: string;
  };
  small: {
    url: string;
  };
};

type ThumnailLegacy = {
  large: {
    url: string;
  };
  medium: {
    url: string;
  };
  small: {
    url: string;
  };
};

//% Record 타입 만들어보기
type Record<K extends keyof any, T> = {
  [key in K]: T;
};

type Thumbnail = Record<"large" | "medium" | "small", { url: string }>;
