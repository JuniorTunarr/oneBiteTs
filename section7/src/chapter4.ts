//# 제네릭 클래스

class NumberList1 {
  constructor(private list: number[]) {}

  push(data: number) {
    this.list.push(data);
  }
  pop() {
    this.list.pop();
  }
  print() {
    console.log(this.list);
  }
}

//% 타입 변수를 사용한 제네릭 클래스
class List<T> {
  constructor(private list: T[]) {}

  push(data: T) {
    this.list.push(data);
  }
  pop() {
    this.list.pop();
  }
  print() {
    console.log(this.list);
  }
}

const numberList = new List([1, 2, 3]);
numberList.pop();
numberList.push(4);
numberList.print();

const stringList = new List(["a", "b", "c"]);
