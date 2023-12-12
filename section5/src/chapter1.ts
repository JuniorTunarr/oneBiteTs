//# 인터페이스 확장하기
//# 객체 타입이면 확장 가능

interface Animal {
  name: string;
  color: string;
}

interface Dog extends Animal {
  //? 원본 타입의 서브 타입만 재정의 가능(name)
  //? name: "hello";
  isBark: boolean;
}

const dog: Dog = {
  name: "멍멍이",
  color: "black",
  isBark: true,
};
interface Cat extends Animal {
  isScratch: boolean;
}
interface Chicken extends Animal {
  isFly: boolean;
}

//# 다중 확장

interface DogCat extends Dog, Cat {}

const DogCat: DogCat = {
  name: "댕냥이",
  color: "white",
  isBark: true,
  isScratch: true,
};
