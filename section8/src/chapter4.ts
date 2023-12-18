//# 템플릿 리터럴 타입
//^ 실제로 사용되는 경우가 많진 않음

type Color = "red" | "blue" | "green";

type Animal = "dog" | "cat" | "monkey";

//! 아래처럼 작성하는 것은 굉장히 비효율적임
type ColoredAnimal = "reds-dog" | "blue-cat" | "green-monkey";

type ColoredAnimal1 = `${Color}-${Animal}`;
