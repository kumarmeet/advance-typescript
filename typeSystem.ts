function multiplyByTwo(num: unknown) {
  if (typeof num !== "number") {
    return "please provide a number";
  }

  return num * 2;
}

console.log(multiplyByTwo(4));

//type alias

// Declaration Type
type CustomString = string;
type CustomNumber = number;
type CustomDate = Date;
type CustomSymbol = Symbol;

// Annotation Type
let firstName: CustomString = "John";
let marks: CustomNumber = 400;
let todayDate: CustomDate = new Date();
let className: CustomSymbol = Symbol("IV");

console.log(className.description);

//Inference, Annotation, Duck Typing and Declaration

function giveNum(num: number) {
  return num;
}

// Inference
const numeric = giveNum(10);

//union types
type Alpha = "a" | "b";
type HybridType = string | number;

// quick conditional types
type DDate = Date;
type SString = string;

type ConditionalSring = SString extends string ? true : false;
type ConditionalNumber = DDate extends Date ? number : string;
type DateAssigment = DDate extends Date ? Date : undefined;

const date: DateAssigment = new Date();

//types herarchi

// A subtype will always exten the parent type
type check = any extends unknown ? true : false;
type check2 = string extends any ? true : false;
type check3 = number extends any ? true : false;
type check4 = {} extends Object ? true : false;
type check5 = [] extends Object ? true : false;
type check6 = Function extends Object ? true : false;
type check7 = never extends any ? true : false;

// A funtion delclaration that never completes and returns a never type
const throwError = (errorMsg: string) => {
  throw new Error(errorMsg);
};

let strings: Object = ["a", "b"];
let myFunc: Function = () => 2;

console.log(myFunc());
