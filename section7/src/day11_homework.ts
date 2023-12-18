//# Quiz 1

//% 다음 요구사항을 만족하는 3개의 인터페이스를 정의하세요
//%
//% Content Interface
//%
//% name(String 타입), info(T 타입) 프로퍼티를 갖습니다.
//% Video Interface
//%
//% playTime(Number 타입) 프로퍼티를 갖습니다.
//% Book Interface
//%
//% pageNumber(Number 타입) 프로퍼티를 갖습니다.

//# Answer 1

interface Video {
  playTime: number;
}

interface Book {
  pageNumber: number;
}

interface Content<T> {
  name: string;
  info: T;
}

//# Quiz 2

//% getComments 함수의 적절한 반환값 타입을 정의 하세요
//%
//% getComments 함수는 여러개의 Comment 타입 객체를 담는 배열을 비동기적으로 반환하는 함수입니다.
//% 반환값 타입이 Promise이 아닌 좀 더 정확한 타입으로 추론되게 하여도 정답으로 인정합니다.

//# Answer 2

interface Comment {
  id: number;
  author: string;
  content: string;
}

function getComments(): Promise<Comment[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          author: "이정환 & 김효빈",
          content: "한입 FE 챌린지! 완강까지 화이팅!",
        },
      ]);
    }, 2000);
  });
}
