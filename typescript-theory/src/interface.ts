export{}

interface Person{
 name: string;
 age: number; 
}

const p1:Person = {name:"soo", age:14};
// const p2:Person = {name:"soo", age:"15"} X

//선택 속성
interface Person2{
  name: string;
  age?: number; 
  age2 : number | undefined;
}
const p3: Person2 = {name:"soo", age2:123};
const p4: Person2 = {name:"soo", age2:undefined};
// const p5: Person2 = {name:"soo"}; !2 parameters should be X 

//read only
interface Person3{
  readonly name: string;
  age?: number;
}

const p5: Person3 = {
  name: "mike"
};
// p5.name = "soo"   !readonly can not change name


// type extension 
interface Person4 {
  readonly name: string;
  age?: number;
}

const p6: Person4 = {
  name: "mike",
  // birthday : "1003,4,5" !literal declare 
}

const p7 = {
  name: "mike3",
  birthday: "1992,4,4"
}

const p8: Person4 = p7; // typescript 확장성

interface Person5{
  readonly name: string;
  age: number;
  [key: string] : string| number;
}

const p9: Person5 = {
  name: "mike",
  age: 15,
  birthday: "100m,022,2",
  notage: "123"
}

//number assign to String
interface YearPriceMap{
  [year: number]: number;
  [year: string]: string | number;
}

const yearMap : YearPriceMap = {};
yearMap[123] = 1000;
// yearMap[123] = "1000";   //string is not assignable to number
yearMap["123"] = 100;
yearMap["123"] = "100";

// interface in Class
interface Person6{
  name: string;
  age: number;
  isYoungerThan(age: number): boolean;
}

class SomePerson implements Person6{
  name: string;
  age: number;
  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }
  isYoungerThan(age:number){
    return true;
  }
}

// extend interface
interface Person7 {
  name: string;
  age: number;
}

interface Korean extends Person7{
  isLiveInSeoul : boolean;
}

let p10 : Korean;


