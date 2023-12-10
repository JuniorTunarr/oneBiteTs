//# 서로소 유니온 타입(Disjoint Union Type = Tagged Union Type)
//# 교집합이 없는 타입들로만 구성된 유니온 타입

import { type } from "os";

//# tag가 Admin이면서 Member일 수 없기에, 서로소 유니온 타입이다.
type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

//% Admin -> {name}님 현재까지 {kickCount}번 강퇴했습니다.
//% Member -> {name}님 현재까지 {point}를 모았습니다.
//% Guest -> {name}님 현재까지 {kickCount}번 강퇴했습니다.
function login(user: User) {
  switch (user.tag) {
    case "ADMIN": {
      console.log(`${user.name}님 현재까지 ${user.kickCount}번 강퇴했습니다.`);
      break;
    }
    case "MEMBER": {
      console.log(`${user.name}님 현재까지 ${user.point}를 모았습니다.`);
      break;
    }
    case "GUEST": {
      console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문했습니다.`);
      break;
    }
  }

  //! 아래와 같은 방식은 타입을 바로 알아볼 수 없기에 가독성이 떨어짐.
  //! if ("kickCount" in user) {
  //!   console.log(`${user.name}님 현재까지 ${user.kickCount}번 강퇴했습니다.`);
  //! } else if ("point" in user) {
  //!   console.log(`${user.name}님 현재까지 ${user.point}를 모았습니다.`);
  //! } else {
  //!   console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문했습니다.`);
  //! }
}
//# 사례
//# 비동기 작업 결과 처리 객체

type LoadingTask = {
  state: "LOADING";
};
type FailedTask = {
  state: "FAILED";
  error: {
    message: string;
  };
};
type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};
type AsyncTask = LoadingTask | FailedTask | SuccessTask;

//% 로딩중 -> 콘솔에 로딩중 표시
//% 실패 -> 실패: 에러메시지를 출력
//% 성공 -> 성공: 데이터를 출력

function processResult(task: AsyncTask) {
  switch (task.state) {
    case "LOADING": {
      console.log("로딩중");
      break;
    }
    case "FAILED": {
      console.log(`실패: ${task.error.message}`); //? 선택적 프로퍼티 사용시 task.error가 undefined일 수 있으므로, task.error?.message로 작성해야한다.
      break;
    }
    case "SUCCESS": {
      console.log(`성공: ${task.response.data}`); //? 선택적 프로퍼티 사용시 task.response가 undefined일 수 있으므로, task.response?.data로 작성해야한다.
      break;
    }
  }
}

const loading: AsyncTask = {
  state: "LOADING",
};

const failed: AsyncTask = {
  state: "FAILED",
  error: {
    message: "오류 발생 원인은 !!",
  },
};
const success: AsyncTask = {
  state: "SUCCESS",
  response: {
    data: "데이터 ~~",
  },
};
