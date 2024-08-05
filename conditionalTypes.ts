interface Human {
  live: () => void;
}

interface Tribal extends Human {
  running: () => void;
}

type WeaponName = Tribal extends Human ? string : number;

type IsString<T> = T extends string ? true : false;

type L = IsString<string>;
type M = IsString<number>;

//exercise
type answer_1 = number extends 56 ? true : false; //false
type answer_2 = 76 extends number ? true : false; //true
type answer_3 = string[] extends any ? true : false; //true
type answer_4 = string[] extends any[] ? true : false; //true
type answer_5 = unknown extends any ? true : false; //true
type answer_6 = any extends any ? true : false; //true
type answer_7 = Date extends { new (...args: any[]): any } ? true : false; //false
type answer_8 = typeof Date extends { new (...args: any[]): any }
  ? true
  : false; //true

//constraints of conditional type
interface DrinkPermission {
  drink: true;
}

interface FillPermission {
  fill: false;
}

interface Bottle {
  id: number;
  brand: string;
  capacity: number;
}

interface PlasticBottle extends Bottle, DrinkPermission {}

interface JuiceBottle extends Bottle, DrinkPermission {}

interface GlassBottle extends Bottle, FillPermission {}

type Drinker<T> = T extends { drink: true } ? true : false;

type Filler<K> = K extends { fill: false } ? true : false;

type Test = Drinker<PlasticBottle>;

//inferring conditional types
//infer keyword only use in conditional types and no where else
type ArrayElementType<T> = T extends (infer E)[] ? E[] : T;

type TypeOne = ArrayElementType<string[]>; //infer array of string
type TypeTwo = ArrayElementType<number[]>; //infer array of number
type TypeThree = ArrayElementType<(number | string | undefined)[]>; //infer array of union
type TypeFour = ArrayElementType<{ name: string }>; //return object {}
type TypeFive = ArrayElementType<string>; //return string

//infer the return type of a function
function returnString() {
  return "Hello World";
}

type FunctionReturnInferType<T> = T extends () => infer R ? R : T;

type NewType = FunctionReturnInferType<typeof returnString>;

//infer function args
function inferFunctionArgs(name: string, age: number) {
  return {
    name: "hello",
    age: 1,
  };
}

type GetFirstArgFunctionInfer<T> = T extends (
  firstArg: infer E,
  ...args: any[]
) => any
  ? E
  : T;

type GetSecondArgFunctionInfer<T> = T extends (
  firstArg: any,
  secondArg: infer E,
  ...args: any[]
) => any
  ? E
  : T;

type CheckFirstArgInfer = GetFirstArgFunctionInfer<typeof inferFunctionArgs>;
type CheckSecondArgInfer = GetSecondArgFunctionInfer<typeof inferFunctionArgs>;
