const numbersq = {
  x: 10,
  y: {
    z: 20,
  },
} as const;

let hello = 1 as unknown as string;

console.log(typeof hello);
