type MAP = <T = any>(arr: T[], cb: (item: T) => T | undefined) => T[];

const myMap: MAP = (arr, cb) => {
  const result: any[] = [];

  for (const item of arr) {
    if (cb(item)) {
      result.push(cb(item));
    }
  }

  return result;
};

const mappedNumber = myMap([1, 2, 3, 4, 5, 6], (num) => {
  if (num % 2 === 0) {
    return num;
  }
});

console.log(mappedNumber);

const mappedString = myMap(["a", "b", "c"], (char) => char + "p");

console.log(mappedString);

//method 2
const map = <T, U>(array: T[], func: (item: T) => U): (U | T)[] => {
  if (array.length === 0) {
    return array;
  }

  let result: U[] = [];

  for (let i = 0; i < array.length; i++) {
    result.push(func(array[i]));
  }

  return result;
};

let numbers = [4, 5, 6, 7, 8, 9];
const converted = map(numbers, (num) => num.toString());
console.log(converted);
