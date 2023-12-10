//# void
//# void => 공허 => 아무것도 없다.
//# void => 아무것도 없음을 의미하는 타입. strictNullChecks 옵션을 끄면 undefined를 담을 수 있다.

function func1(): string {
  return 'Hello World';
}

function func2(): void {
  console.log('Hello World');
} 

//# never
//# never => 존재하지 않는
//# 불가능한 타입. 절대 발생할 수 없는 타입. 모든 타입의 subtype이며 모든 타입에 할당 가능. 하지만 never에는 그 어떤 것도 할당할 수 없다. any조차도 never에는 할당할 수 없다. 잘못된 타입을 넣는 실수를 막고자 할 때 사용하기도 한다.

function func3(): never {
  while (true) { }
}
function func4(): never {
  throw new Error();
}