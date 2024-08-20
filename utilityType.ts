//Awaited<Type>
const promise: Promise<string> = new Promise((res, rej) => {
  setTimeout(() => {
    res("Hello World");
  }, 1000);
});

type AwaitedType = Awaited<typeof promise>;

//Record<Keys, Type>
type Jobs = "author" | "editor" | "researcher";

interface Jobseekers {
  name: string;
  email: string;
  age: number;
}

interface Article {
  title: string;
  content: string;
  contributors: Record<Jobs, Jobseekers>;
}

const article: Article = {
  title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  content: "Duis est urna, eleifend at malesuada id, suscipit eu",
  // Contributors can be type generated from Roles type and User interface
  contributors: {
    author: { name: "John", email: "john@email.com", age: 32 },
    editor: { name: "Frank", email: "frank@email.com", age: 36 },
    researcher: { name: "Mark", email: "mark@email.com", age: 36 },
  },
};

//Pick<Type, Keys>

const opopo: Pick<Jobseekers, "email" | "age"> = {
  email: "test@email.com",
  age: 11,
};

const rropopo: Readonly<Pick<Jobseekers, "email" | "age">> = {
  email: "test@email.com",
  age: 11,
};

const opopopp: Readonly<Pick<Record<Jobs, Jobseekers>, "editor">> = {
  editor: { name: "John", email: "john@email.com", age: 32 },
};

//Omit<OldType, Keys>

const omopopo: Omit<Jobseekers, "email" | "age"> = {
  name: "only name",
};

const omrropopo: Readonly<Omit<Jobseekers, "name">> = {
  email: "test@email.com",
  age: 11,
};

const omopopopp: Readonly<
  Omit<Record<Jobs, Jobseekers>, "author" | "researcher">
> = {
  editor: { name: "John", email: "john@email.com", age: 32 },
};

//  Partial<Type>;
interface User4 {
  name: string;
  email: string;
  password: string;
}

function updateUser(user: User4, updates: Partial<User4>): User4 {
  return { ...user, ...updates };
}

const usere: User4 = {
  name: "John",
  email: "test@email.com",
  password: "password",
};

const updatedUser = updateUser(usere, { email: "email@test.com" });

//Required<Type>

interface OptionalField {
  a?: string;
  b?: string;
  c?: string;
}

const allRequired: Required<OptionalField> = {
  a: "",
  b: "",
  c: "",
};

const aAndBRequired: Required<Pick<OptionalField, "a" | "b">> = {
  a: "",
  b: "",
};

//String Manipulation Types
type City = "bhopal" | "indore" | "tokyo";

type UppercaseCity = Uppercase<City>;
const cityUpper: UppercaseCity = "BHOPAL";

type LowercaseCity = Lowercase<UppercaseCity>;
const cityLower: LowercaseCity = "bhopal";

type Sentences = "hello world" | "no way";

type CapitalizeSen = Capitalize<Sentences>;
const senCapi: CapitalizeSen = "Hello world";

type UncapitalizeSen = Uncapitalize<CapitalizeSen>;
const senUnCapi: UncapitalizeSen = "no way";
