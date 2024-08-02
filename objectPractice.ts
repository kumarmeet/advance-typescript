type Seat = {
  [key: string]: string;
};

type Caterer = {
  name: string;
  address: string;
  phone: number;
};

export type Airplane<T, U> = {
  model: string;
  flightNumber: string;
  timeOfDeparture: T | U;
  timeOfArrival: T | U;
  caterer: Caterer;
  seats: Seat;
};

export let airplane: Airplane<Date, string> = {
  model: "Airbus A380",
  flightNumber: "A2201",
  timeOfDeparture: new Date(),
  timeOfArrival: new Date(),
  caterer: {
    name: "Special Food Ltd",
    address: "484, Some Street, New York",
    phone: 7867856751,
  },
  seats: {
    A1: "John Doe",
    A2: "Mark Doe",
    A3: "Sam Doe",
  },
};
