//# 접근 제어자(Access Modifiers)
//# public: 어디서든 접근 가능
//# private: 클래스 내부에서만 접근 가능(외부에서 접근 불가)
//# protected: 파생 클래스에서 접근 가능(외부에서 접근 불가)

class Employee {
  //%  필드
  private name: string;
  protected age: number;
  public position: string;
  private salary: number;

  //% 생성자
  constructor(name: string, age: number, position: string, salary: number) {
    this.name = name;
    this.age = age;
    this.position = position;
    this.salary = salary;
  }

  //% 메서드
  work() {
    console.log("취업 준비중");
  }
  func() {
    this.age;
    this.name;
  }
}

const employee = new Employee("치현", 29, "front-end developer", 4000);
//! name 프로퍼티는 private로 선언되어 있기 때문에 클래스 외부에서 접근 불가
//! employee.name = "길동이";
//! age 프로퍼티는 protected로 선언되어 있기 때문에 클래스 외부에서 접근 불가
//! employee.age = 30;
employee.position = "back-end developer";
console.log(employee);

class Employee1 {
  //% 생성자
  constructor(
    private name: string,
    protected age: number,
    public position: string,
    private salary: number
  ) {}

  //% 메서드
  work() {
    console.log("취업 준비중");
  }
  func() {
    this.age;
    this.name;
  }
}
