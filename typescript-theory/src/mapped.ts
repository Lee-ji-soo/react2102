export { }

//mapped type can set type & types's property once.

type T1 = { [K in "prop1" | "prop2"]: boolean };
// T1={
//   prop1:boolean,
//   prop2:boolean
// }

interface Person {
  name: string;
  age: number
}

type MakeBoolean<T> = { [P in keyof T]?: boolean };
type pMap = MakeBoolean<Person>
const pMap: MakeBoolean<Person> = {};
pMap.name = true;
pMap.age = false;

// type T1 = Person["name"];
type Readonly<T> = { readonly [P in keyof T]: T[P] };
type Partial<T> = { [P in keyof T]?: T[P] };
type T2 = Partial<Person>
type T3 = Readonly<Person>

type Pick<T, K extends keyof T> = { [P in K]: T[P] };

interface Person {
  name: string,
  age: number,
  language: string
}

type T5 = Pick<Person, "name" | "language">;

interface Person2 {
  name: string,
  age: number,
  language: string,
}

type Record<K extends string, T> = { [P in K]: T };
type T6 = Record<"p1" | "p2", Person>;
type T7 = Record<"p1" | "p2", number>;

// 에러를 잡아주는 mapped
enum Fruit {
  Apple,
  Bannana,
  Orange,
  Strawberry
}

const FRUIT_PRICE: { [key in Fruit]: number } = {
  [Fruit.Apple]: 1000,
  [Fruit.Bannana]: 2000,
  [Fruit.Orange]: 2500,
  [Fruit.Strawberry]: 3000,
}
