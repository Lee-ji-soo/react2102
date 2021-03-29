export{};

let v1 = 123;
let v2 = "abc";
//v1 = "a"; //string X
//v2 = 456; //number X

const arr1 = [10, 20, 30];
const [n1, n2, n3] = arr1;
// arr1.push("a") 

const obj = {id : "abcd", age: 123, language: "korean"};
const {id, age, language} = obj;
// console.log(id === age);

interface Person{
  name: string;
  age: number;
}

interface Korean extends Person{
  liveInSeoul : boolean;
}
interface Japanese extends Person{
  liveInTokyo : boolean;
}

const p1 : Person = {name: "mike", age:23};
const p2 : Korean = { name: "mike", age:25, liveInSeoul: true};
const p3 : Japanese = {name: "mike", age:26, liveInTokyo: false};
const arr2 = [p1,p2,p3];
const arr3 = [p2,p3];


