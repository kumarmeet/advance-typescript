enum Manufacturers {
  boeing = "boeing",
  airbus = "airbus",
}

interface AircraftInterface {
  _aircraftModel: string;
  prototype?: any;
  origin?: string;
  manufacturer?: string;
  type?: string;
  airbusMethod?: () => void;
  boeingMethod?: () => void;
  pilotName: () => void;
}

function AircraftManufacturer(manufacturer: Manufacturers) {
  return (target: Function) => {
    console.log("---------start class decorator---------");
    if (manufacturer === Manufacturers.airbus) {
      target.prototype.origin = "United States Of America";
      target.prototype.manufacturer = Manufacturers.airbus;
      target.prototype.type = "Jet";

      target.prototype.airbusMethod = () => {
        console.log("Fuction performed by airbus");
      };
    } else {
      target.prototype.origin = "France";
      target.prototype.manufacturer = Manufacturers.boeing;
      target.prototype.type = "Helicopter";

      target.prototype.airbusMethod = () => {
        console.log("Fuction performed by boeing");
      };
      console.log("---------end class decorator---------");
    }
  };
}

//method decorator
function FunctionDecorator(
  classPrototype: Object,
  methodName: string,
  descriptor: PropertyDecorator
) {
  console.log("---------start function decorator---------");
  console.log(classPrototype);
  console.log(methodName);
  console.log(descriptor);
  //@ts-ignore
  descriptor.writable = false;
  console.log("---------end function decorator---------");
}

//static method decorator
function StaticFunctionDecorator(
  constructor: Function,
  methodName: string,
  descriptor: PropertyDecorator
) {
  console.log("---------start static function decorator---------");
  console.log(constructor);
  console.log(methodName);
  console.log(descriptor);
  console.log("---------end static function decorator---------");
}

//param decorator
function ParamDecorator(
  classPrototype: Object,
  methodName: string,
  index: number //index return the positon of the parameter
) {
  console.log("---------start param decorator---------");
  console.log(classPrototype);
  console.log(methodName);
  console.log(index);
  console.log("---------end param decorator---------");
}

//class property decorator
function ClassPropertyDecorator(classPrototype: Object, propertyName: string) {
  console.log("---------start class property decorator---------");
  console.log(classPrototype);
  console.log(propertyName);
  console.log("---------end class property decorator---------");
}

//accessor decorator eg get and set
function AccessorDecorator(
  classPrototype: Object,
  accessorName: string,
  descriptor: PropertyDecorator
) {
  console.log("---------start accessor decorator---------");
  console.log(classPrototype);
  console.log(accessorName);
  console.log(descriptor);
  console.log("---------end accessor decorator---------");
}

@AircraftManufacturer(Manufacturers.airbus)
class Airplane implements AircraftInterface {
  @ClassPropertyDecorator
  public _aircraftModel: string;

  constructor(_aircraftModel: string, private pilot: string) {
    this._aircraftModel = _aircraftModel;
    console.log("Aircraft Class Instantiated");
  }

  public params(@ParamDecorator id: number, @ParamDecorator name: string) {
    console.log("----------->", id, name);
  }

  //@ts-ignore
  @FunctionDecorator
  public pilotName() {
    console.log(this.pilot);
  }

  //@ts-ignore
  @AccessorDecorator
  public get aircraftModel() {
    return this._aircraftModel;
  }

  //@ts-ignore
  @AccessorDecorator
  public set aircraftModel(_aircraftModel: string) {
    this._aircraftModel = _aircraftModel;
  }
}

@AircraftManufacturer(Manufacturers.boeing)
class Helicopter implements AircraftInterface {
  constructor(public _aircraftModel: string, private pilot: string) {
    console.log("Helicopter Class Instantiated");
  }

  //@ts-ignore
  @StaticFunctionDecorator
  public static seatCount() {
    console.log(4444);
  }

  public pilotName() {
    console.log(this.pilot);
  }

  public get aircraftModel() {
    return this._aircraftModel;
  }
}

//for airplane
const airplane: AircraftInterface = new Airplane("Airbus A380", "John");

console.log(airplane.manufacturer, airplane.origin, airplane.type);

airplane?.airbusMethod && airplane.airbusMethod();

// airplane.pilotName = () => {
//   console.log("first");
// };

//for helicopter
const helicopter: AircraftInterface = new Helicopter("Helicopter HH77", "Doe");

console.log(helicopter.manufacturer, helicopter.origin, helicopter.type);

helicopter?.boeingMethod && helicopter.boeingMethod();
