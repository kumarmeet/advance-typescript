let id: symbol = Symbol("1234");
let alphaId: symbol = Symbol("id");

let user = {
  [id]: "ytuhgu",
  name: "Meet",
  getId() {
    return this[id];
  },
};

console.log(user.getId());
