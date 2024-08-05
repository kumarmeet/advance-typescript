//keyof
type EventType = {
  id: number;
  date: Date;
  type: "indoor" | "outdoor";
};

type UnionKeyOfEvents = keyof EventType;

//typeof
let greeting = "Hello World";

let firstname: typeof greeting;

const uu = {
  size: 10,
  frequency: 2,
};

let pp: typeof uu = {
  frequency: 44,
  size: 123,
};

//mapped types
let numss = [1, 5, 4, 8, 9, 6, 3, 54, 217];

let stringNumbers = numss.map((v) => v.toString());

console.log(stringNumbers);

//totality
type TWeekdays = "mon" | "tue" | "wed" | "thu" | "fri";
type TDays = Weekdays | "sat" | "sun";

type NextDays = {
  [T in Weekdays]: TDays;
};

let nextDay: NextDays = {
  mon: "tue",
  tue: "wed",
  wed: "thu",
  thu: "fri",
  fri: "sat",
};

//real world use case of mapped types
type Artist = {
  id: number;
  name: string;
  bio: string;
};

/**
  type MappedArtistForEdit = {
      id?: number | undefined;
      name?: string | undefined;
      bio?: string | undefined;
  } & {
      id: number;
  }
 */
type MappedArtistForEdit = {
  [T in keyof Artist]?: Artist[T];
} & { id: number };

const artist: MappedArtistForEdit = {
  id: 4,
};
