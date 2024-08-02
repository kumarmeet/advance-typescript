let safeInt = Number.MAX_SAFE_INTEGER;

console.log(safeInt);

let bigInt = BigInt(1000);
let bigInt2 = 4000n;

let addBigInt: bigint = bigInt2 / bigInt;

console.log(addBigInt);
