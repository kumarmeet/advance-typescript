function DecoratorOne(constructor: Function) {
  console.log("Decorator One");
}

function DecoratorTwo(constructor: Function) {
  console.log("Decorator Two");
}

function AddLocationFactory(lat: number, long: number) {
  return <T extends { new (...args: any[]): {} }>(constructor: T) => {
    return class extends constructor {
      public mapLocation: MapLocation;

      constructor(...args: any[]) {
        super(...args);
        this.mapLocation = {
          lat: lat,
          long: long,
        };
        console.log(this.mapLocation, args);
      }
    };
  };
}

interface MapLocation {
  lat: number;
  long: number;
}

@DecoratorOne
@DecoratorTwo
@AddLocationFactory(123, 132)
class Person {
  constructor(
    public name: string,
    public earning: number,
    public mapLocation: MapLocation
  ) {}
}

const p: Person = new Person("Meet", 44444444, {
  lat: 123546.1452,
  long: 8495.3654,
});
