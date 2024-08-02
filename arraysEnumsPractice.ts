// Practice Questions
//* 1. Create an array numbers that only accepts numbers and another array strings that only accepts strings.
let array1: number[];
let array2: string[];

//* 2. Create a tuple person that holds a string (name) and a number (age).
const person: [string, number] = ["name", 4];

//* 3. Create a readonly array colors that holds strings and a readonly tuple point that holds two numbers (x, y). Attempt to modify their elements and observe the TypeScript error.
const colors: readonly string[] = ["blue", "green", "gold"];
const nums: Readonly<[number, number]> = [10, 20];

//* 4. Create an enum called StatusEnum that should 3 properties Active, Inactive, Pending
enum StatusEnum {
  Active = "active",
  Inactive = "inactive",
  Pending = "pending",
}

//* 5. Create an object as const called Status with the same structure as an StatusEnum
const Status = {
  Active: "active",
  Inactive: "inactive",
  Pending: "pending",
} as const;
