type Weekdays = "mon" | "tue" | "wed" | "thu" | "fri";

type o = {
  [T in Weekdays]: string;
};

type Days = Weekdays | "sat" | "sun";

function nextDayOfWeekDay(weekdays: Weekdays): Days {
  switch (weekdays) {
    case "mon":
      return "tue";
    case "tue":
      return "wed";
    case "wed":
      return "thu";
    case "thu":
      return "fri";
    case "fri":
      return "sat";
  }
}

console.log(nextDayOfWeekDay("mon"));
