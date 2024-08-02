//differente type of genetics functions type defination

//1
/**
 * This is a generic type alias.
 * The generic parameter T is defined at the type level.
 * When you use this type, you need to specify the type argument explicitly.
 */
type GetData<T> = (num: T) => T;

const updateNumber: GetData<number> = (num: number): number => num;
const updateString: GetData<string> = (num: string): string => num;

console.log(updateNumber(40)); // Prints: 10
console.log(updateString("hello")); // Prints: hello

//2
/**
 * This is also a generic type alias, but here the generic parameter T is defined at the function level within the type.
 * You don't need to specify the type argument when you use the type; instead, the type argument is inferred when the function is invoked.
 */
type TGetData = <T>(num: T) => T;

const update: TGetData = <T>(num: T): T => num;

console.log(update(10)); // Prints: 10
console.log(update("world")); // Prints: hello
