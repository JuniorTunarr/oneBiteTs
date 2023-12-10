//# Unknown 타입(모든 타입의 슈퍼타입)

function unknownExam() {
  //@ Up Casting 가능
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  //! Down Casting 불가능
  //! let num: number = unknownVar;
  //! let str: string = unknownVar;
  //! let bool: boolean = unknownVar;
}

//# Never 타입(공집합)

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  //! Down casting 불가능: never 타입에는 어떤 값도 할당할 수 없다.
  //! let never1: never = 10;
  //! let never2: never = 'hello';
  //! let never3: never = true;
}

//# Void 타입(undefined)

function voidExam() {
  //@ void는 undefined의 슈퍼 타입. undefined가 return되어도 에러가 발생하지 않는다.
  function voidFunc(): void {
    console.log("void function");
    return undefined;
  }

  let voidVar: void = undefined;
}

//# Any 타입(모든 타입의 슈퍼타입이자 서브타입. never 제외)

function anyEaxm() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar;

  undefinedVar = anyVar;

  //! any타입도 never타입에는 Down Casitng이 불가능하다.
  //! Type 'any' is not assignable to type 'never'.
  //! neverVar = anyVar;
}
