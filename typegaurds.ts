function printStrings(str: string | string[] | null) {
  if (str && typeof str === "object") {
    for (const s of str) {
      console.log(s);
    }
  } else if (typeof str === "string") {
    console.log(str);
  } else {
    console.log(null);
  }
}

//instance of type gaurds
abstract class Productp {
  constructor(public name: string, public price: number) {}

  abstract getPrice(): number;
}

class Electronics extends Productp {
  constructor(
    public name: string,
    public price: number,
    public warranty: number
  ) {
    super(name, price);
    this.warranty = warranty;
  }

  getPrice(): number {
    return this.price;
  }
}

class Clothing extends Productp {
  constructor(
    public name: string,
    public price: number,
    public size: number,
    public material: string
  ) {
    super(name, price);
    this.size = size;
    this.material = material;
  }

  getPrice(): number {
    return this.price;
  }
}

function diplayDetails(product: Productp) {
  console.log(`Name: ${product.name}`);
  console.log(`Price: ${product.getPrice()}`);

  if (product instanceof Clothing) {
    console.log(`Size: ${product.size}`);
    console.log(`Material: ${product.material}`);
  } else if (product instanceof Electronics) {
    console.log(`Warranty: ${product.warranty}`);
  }
}
