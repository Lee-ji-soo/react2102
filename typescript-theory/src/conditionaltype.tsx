export {};

type IsStringType<T> = T extends string ? "yes" : "no";
type T0 = IsStringType<string>;
type T1 = IsStringType<string | number>;
// type T2 = IsStringType<string> | IsStringType<number>; 

type Array2<T> = Array<T>;
type T3 = Array2<string | number>;

//Exclude, Extract
type T4= number | string | never;
type Exclude<T,U> = T extends U ? never : T;
type T5 = Exclude<1|3|5|7,1|5|9>;
type T6 = Exclude<string | number | (()=>void), Function>;
type Extract<T,U> = T extends U ? T : never;
type T7 = Extract<1|3|5|7,1|5|9>;

//Return
type ReturnType<T> = T extends (...args: any[])=> infer R? R:any;
type T8 = ReturnType<()=>string>;
function f1(s:string):number{
  return s.length;
}
type T9 = ReturnType<typeof f1>;

//
type Unpacked<T> = T extends (infer U)[]
  ? U
  : T extends (...args: any[]) => infer U
  ? U
  : T extends Promise<infer U>
  ? U
  : T;

type T10 = Unpacked<string>; //string
type T11 = Unpacked<string[]>; // string
type T12 = Unpacked<()=>string>; // string 
type T13 = Unpacked<Promise<string>>; //string
type T14 = Unpacked<Promise<string>[]>; // Promise<string>
type T15 = Unpacked<Unpacked<Promise<string>[]>>; // string

//
type StringPropertyNames<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];

interface Person {
  name: string;
  age: number;
  nation: string;
}

type T16 = StringPropertyNames<Person>; 
//{ name: "name"; age: never; nation: "nation"}

interface Person2 {
  name: "name";
  age: never;
  nation: "nation"
}

type T17 = Person2["name" | "nation" | "age"];

type StringProperties<T> = Pick<T, StringPropertyNames<T>>;
type T18 = StringProperties<Person>

//Omit
type Omit<T, U extends keyof T> = Pick<T, Exclude<keyof T, U>>;

interface Person{
  name: string;
  age: number;
  nation: string;
}

type T19 = Omit<Person, "nation"|"age">

//Overwrite
type Overwrite<T,U> = { [P in Exclude<keyof T, keyof U>]: T[P]} & U;

interface Person{
  name: string;
  age: number;
}

type T20 = Overwrite<Person, {age: string; nation: string}>;
const p : T20 = {
  name: "mike",
  age: "23",
  nation: "korea"
};

