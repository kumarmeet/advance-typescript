//decorators only works with class declaratioin and on its members, do not work on independent function

function LogClass(contructor: any, context: any) {
  console.log(contructor);
  console.log(context);
  // console.log("@LogClass invoked!");
}

function LogClassFactory(lastName: string) {
  return function (contructor: any, context: any) {
    console.log(contructor);
    console.log(context);
    console.log(lastName);
    // console.log("@LogClass invoked!");
  };
}

function Log(constructor: any) {
  console.log(constructor);
}

@Log
class MyClass {
  constructor(public name: string) {}
}

const myClass = new MyClass("");
