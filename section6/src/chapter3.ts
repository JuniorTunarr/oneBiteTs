//# 인터페이스와 클래스

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

//# 캐릭터 인터페이스라는 것을 구현하는 클래스
//? interface는 public만 허용한다.

class Character implements CharacterInterface {
  name: string;
  moveSpeed: number;
  constructor(name: string, moveSpeed: number) {
    this.name = name;
    this.moveSpeed = moveSpeed;
  }
  move() {
    console.log(`${this.name}: ${this.moveSpeed} 속도로 이동중!`);
  }
}
