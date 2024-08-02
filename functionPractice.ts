/**
 * Practice Excercise for functions
 */

//* 1. Declare a function named greet that takes a string parameter name and returns a greeting message.
function greet(greetMessage: string) {
  return greetMessage;
}

//* 2. Define an type Product with properties id (number) and name (string). Create a function named getProduct that takes an id parameter and returns a Product.
type Product = {
  id: number;
  name: string;
};

type FindData<T, U> = (id: T, data: U[]) => U[];

const product: FindData<number, Product> = (
  id: number,
  data: Product[]
): Product[] => {
  return data.filter(({ id: productId }: Product) => productId === id);
};

//* 3. Declare a function signature named Calculator as a type that takes two numbers and returns a number. Implement two functions add and subtract that match this signature.
type Calculator<T> = (num1: T, num2: T) => T;

const addition: Calculator<number> = (n1: number, n2: number) => n1 + n2;

const subtractions: Calculator<number> = (n1: number, n2: number) => n1 - n2;

//* 4. Create a function named logMessage that takes a string message and logs it to the console, returning void. Also, create a function named throwError that takes a string message and throws an error, returning never.

function logMessage(msg: string): void {
  console.log(logMessage);
}

function throwNewError(err: string): never {
  throw new Error(err);
}
