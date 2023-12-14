//# map 메서드

const arr = [1, 2, 3];
const newArr = arr.map((v) => v * 2);
console.log(newArr); //& result: [2, 4, 6]

function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
}

map(arr, (v) => v * 2);

//! 'number' 형식의 인수는 'string' 형식의 매개 변수에 할당될 수 없습니다.

//! function map<T>(arr: T[], callback: (item: T) => T) {
//!   let result = [];
//!   for (let i = 0; i < arr.length; i++) {
//!     result.push(callback(arr[i]));
//!   }
//! }
//! map(["bye", "hi"], (v) => parseInt(v));
map(["1", "2"], (v) => parseInt(v));

//# forEach 메서드

const arr2 = [1, 2, 3];
arr2.forEach((v) => console.log(v));

function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

forEach(arr2, (v) => console.log(v.toFixed()));
forEach(["123", "456"], (v) => console.log(v.length));
