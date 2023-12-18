//# 프로미스
//? 프로미스 객체는 에러가 많이 발생함

//? 비동기 처리의 결과값은 지정해주지 않으면 'unknown' 타입이 됨
const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // resolve(20);

    reject("~때문에 에러 발생!");
  }, 3000);
});

promise.then((response) => {
  //! Promise<number> 미 지정시
  //! 'response'는 'unknown' 타입입니다.
  //! console.log(response * 10);
  console.log(response * 10);
});

promise.catch((err) => {
  if (typeof err === "string") {
    console.log("string");
  }
});

//# 프로미스를 반환하는 함수의 타입을 정의

interface Post {
  id: number;
  title: string;
  content: string;
}

//? 이런 식으로도 지정 가능
//?   return new Promise<Post>((resolve, reject) => {
function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글 컨텐츠",
      });
    }, 3000);
  });
}

const postRequest = fetchPost();

postRequest.then((post: Post) => {
  console.log(post.title);
});
