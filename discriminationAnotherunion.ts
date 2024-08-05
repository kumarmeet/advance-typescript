type A = {
  type: "a";
  isAlphabet: boolean;
  p: number;
};

type $ = {
  type: "$";
  isAlphabet: boolean;
};

type MakeUnion = A | $;

let alpha: MakeUnion = {
  isAlphabet: true,
  type: "a",
  p: 10,
};

let symbol: MakeUnion = {
  isAlphabet: false,
  type: "$",
};

function checkingDiscriminationUninon(d: MakeUnion) {
  if (d.type === "a") {
    console.log("This is alpabet", d.isAlphabet);
  }

  if (d.type === "$") {
    console.log("This is symbol", d.isAlphabet);
  }
}

checkingDiscriminationUninon(alpha);
checkingDiscriminationUninon(symbol);
