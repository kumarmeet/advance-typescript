//named function
function returnParmas<T>(param: T): T {
  return param;
}

returnParmas<string>("hello world");
returnParmas<number>(10);
returnParmas<boolean>(true);
returnParmas<{ id: number }>({ id: 10 });

//arrow function
const myParam: <T>(param: T) => T = (param) => param;

//function express
const myParam2 = function <U>(param: U): U {
  return param;
};

//call signature
type MyObj = {
  myParam: <V, X>(param: V, param2: X) => X | V;
};

//type alias
type MyParam = <D>(param: D) => D;

//generics used for function declaration
type GetFirstElement = <T>(arr: T[]) => T;

const getFirstElement: GetFirstElement = (arr) => {
  return arr[0];
};

console.log(getFirstElement<number>([10, 20, 40])); // but do not need to specifically pass <number>
console.log(getFirstElement<string>(["a", "b", "c"])); // but do not need to specifically pass <string>

//generics used for function declaration different syntax
type FirstElement<T> = (arr: T[]) => T;

const firstElement: FirstElement<string> = (arr) => {
  return arr[0];
};

const firstElementNumber: FirstElement<number> = (arr) => {
  return arr[0];
};

console.log(firstElementNumber([10, 20, 40]));
console.log(firstElement(["a", "b", "c"]));

//generic and constraints with arrays
type HasLength = {
  length: number;
};

function logLength<T extends HasLength>(item: T): void {
  console.log("length is -> ", item.length);
}

logLength([1, 2, 3, 4, 5]);
logLength("Hello World");
logLength({ a: 1, b: 4, c: 9, length: 3 });

// generics with objects
type KeyValue<T, U> = {
  key: T;
  value: U;
};

let stringNumberPair: KeyValue<string, number> = {
  key: "hello",
  value: 14,
};

let numberArrayPair: KeyValue<number, number[]> = {
  key: 14,
  value: [1, 2, 3, 4],
};

type HasId = {
  id: number;
};

function getUserById<T extends HasId>(user: T) {
  console.log(user.id);
}

getUserById({ id: 124 });

//keyof operator
type Events = {
  id: number;
  date: Date;
  eventType: "indoor" | "outdoor";
};

//keyof operator only works object types
type UnionKeysOfEvents = keyof Events; // id | date | eventType

const dateOfevents: UnionKeysOfEvents = "date";

type Numeric = {
  [key: number]: string;
};

type NumericOf = keyof Numeric;

type NumberAndString = {
  [key: string]: string;
};

//it will automatially added string and number union becasue the js behaviour as key in object always be a string or number
type NumberAndStringOf = keyof NumberAndString;

//partial type of an object
type TPerson = {
  name: string;
  age: number;
  address: string;
};

type PartialPerson = {
  [K in keyof TPerson]?: TPerson[K] | null;
};

let partialPerson: PartialPerson = {
  name: "user1",
};

console.log(partialPerson);

//generics defaults

//assigning any in type T
async function fetchData<T = any>(url: string): Promise<T> {
  const response = await fetch(url);
  const data = response.json();
  return data;
}

async function fetchDefault(url: string) {
  const data = await fetchData(url);
  return data;
}

// fetchDefault("https://jsonplaceholder.typicode.com/posts/1").then((res) => {
//   console.log(res);
// });

//polymorphic function
type Filter = <T = any>(arr: T[], cb: (item: T) => boolean) => T[];

const myFilter: Filter = (arr, cb) => {
  const result: any[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
};

const item = [1, 2, 3, 4, 5, 6];

const filtered = myFilter(item, (value) => value > 2);

console.log(filtered);
