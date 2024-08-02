//default param
function intro(name: string, lastname: string, age = 0) {}

//optional param
function intro2(name: string, country: string, address?: string) {}

//custom params
enum Brand {
  motorola = "motorola",
  samsung = "samsung",
  apple = "apple",
}

type GreetingFunc = (txt: string) => string; //function call signature

type Mobile = {
  brand: Brand;
  isTouchScreen: boolean;
  model: string;
  isBackcovered?: boolean;
  greetings?: GreetingFunc;
};

function putBackCoverOnMobile(mobile: Mobile): Mobile {
  const { isTouchScreen } = mobile;

  if (isTouchScreen) {
    mobile.isBackcovered = true;
  }

  return mobile;
}

const objData = putBackCoverOnMobile({
  brand: Brand.apple,
  isTouchScreen: true,
  model: "Iphone 14",
  greetings: (txt) => txt,
});

console.log(objData);

if (objData?.greetings) {
  console.log(objData.greetings("Greetings......."));
}

//async function
async function messages(): Promise<Array<Mobile>> {
  return Promise.resolve([objData]);
}

let mobileData = async function () {
  let mobileData;
  try {
    mobileData = await messages();
    return mobileData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

mobileData();

// rest params

function multiplyBy(by: number, ...nums: number[]) {
  return nums.map((v) => by * v);
}

const resultMul = multiplyBy(2, ...[5, 9, 7, 6, 3, 88]);

console.log(resultMul);

//function overloading
// What if we hd to struictly type such function overloads?
// Hypothtical AirTicket Reservation System
type Reservation = {
  departureDate: Date;
  returnDate?: Date;
  departingFrom: string;
  destination: string;
};

// Declare a call signature
// type Reserve = (
//   departureDate: Date,
//   returnDate: Date,
//   departingFrom: string,
//   destination: string
// ) => Reservation;

// Using a more explicit syntax for call signatures
// This is considered as an object with keys as function params
type Reserve = {
  (
    departureDate: Date,
    returnDate: Date,
    departingFrom: string,
    destination: string
  ): Reservation | never;
  (departureDate: Date, departingFrom: string, destination: string):
    | Reservation
    | never;
};

const reserve: Reserve = (
  departureDate: Date,
  returnDateOrDepartingFrom: Date | string,
  departingFromOrDestination: string,
  destination?: string
) => {
  if (returnDateOrDepartingFrom instanceof Date && destination) {
    return {
      departureDate: departureDate,
      returnDate: returnDateOrDepartingFrom,
      departingFrom: departingFromOrDestination,
      destination: destination,
    };
  } else if (typeof returnDateOrDepartingFrom === "string") {
    return {
      departureDate: departureDate,
      departingFrom: returnDateOrDepartingFrom,
      destination: departingFromOrDestination,
    };
  }

  throw new Error("please provide valid details to reserve a ticket");
};

console.log(
  reserve(new Date(), new Date(), "First possiblity params", "hello")
);
console.log(reserve(new Date(), "Second possiblity params", "hello"));
