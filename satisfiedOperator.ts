type Properties = "red" | "green" | "blue";

type RGB = [red: number, green: number, blue: number];

const color = {
  red: [255, 0, 0],
  blue: [255, 100, 140],
  green: "#00ff00",
} satisfies Record<Properties, RGB | string>;

console.log(color.green.toUpperCase());
