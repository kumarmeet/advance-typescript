//decorators execute only once through out the application process
function FirstDecorator(message: string) {
  return function (constructor: Function) {
    console.log("First Decorator -> ", constructor, message);
  };
}

function FirstDecoratorFunc(message: string) {
  return function (
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log(target);
    console.log("First Decorator FUNC -> ", message);
    console.log("First Decorator FUNC -> ", descriptor);
    console.log("First Decorator FUNC -> ", propertyKey);
    // Modify the descriptor as needed
    return descriptor;
  };
}

@FirstDecorator("First Decorator")
class Aircraft {
  constructor(public _aircraftModel: string, private pilot: string) {}

  @FirstDecoratorFunc("Method Decorator")
  public pilotName() {
    console.log(this.pilot);
  }

  public get aircraftModel() {
    return this._aircraftModel;
  }
}
