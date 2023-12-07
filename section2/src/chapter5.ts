//# enum 타입
//# 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
//# 보통의 타입은 컴파일시 사라지지만, enum은 컴파일 후에도 남아있음

//? 필요성

enum Role { //% 숫자형 enum
  ADMIN = 0, //% 숫자를 하나만 할당하면 그 다음 숫자는 자동으로 1씩 증가. 첫번째 수는 0부터 시작
  USER = 1,
  GUEST = 2,
}
enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "이정환",
  role: Role.ADMIN, // 0 <- 관리자
  language: Language.korean,
};
const user2 = {
  name: "홍길동",
  role: Role.USER, // 1 <- 일반 유저
  language: Language.english,
};
const user3 = {
  name: "아무개",
  role: Role.GUEST, // 2 <- 게스트
};

console.log(user1, user2, user3);
