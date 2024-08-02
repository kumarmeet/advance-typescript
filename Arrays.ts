import { airplane, Airplane } from "./objectPractice";

const airplanes: Airplane<Date, string>[] = [];

for (let i = 0; i < 2; i++) {
  airplane.flightNumber = `A220${i + 3}-ai`;
  airplanes.push(airplane);
}

console.log(airplanes);

//tuples
type Color = readonly [string, string, string, number?];

const color: Color = ["green", "blue", "black", 0.4];

console.log(
  color.constructor.name === "Array",
  color,
  airplane.constructor.name === "Object",
  airplane
);

//optional tupule
type User = [string, string, number?];

const user: User = ["John", "Doe"];

console.log(user);

// two strict but rest of the values must be string, only use one rest operator values and this is optional as well
type ListOfStudents = [number, boolean, ...string[]];

const passedStudents: ListOfStudents = [10, true, "student1", "student2"];
const anotherPassedStudents: ListOfStudents = [4, true];

console.log(passedStudents, anotherPassedStudents);

//readonly
type TArr = readonly number[];

let y: TArr = [5, 4, 7];

console.log(y);

type b = Readonly<string[]>;
type c = ReadonlyArray<(string | number)[]>;
type e = Readonly<[string, string, number]>;
