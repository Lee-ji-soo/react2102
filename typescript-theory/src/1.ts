export{};

const size:number = 123;
const isBig:boolean = true;
const msg:string = isBig ? '크다': "작다"
const values:number[] =[1,2,3];
// values.push("a") X

const data:[string,number] = [msg,size];
data[0].substr(1);

let v1 : undefined = undefined;
// v1 = 123 X

let v3 : undefined | number = undefined;
v3 = 123;

console.log(typeof undefined) // undefined
console.log(typeof null) // object;

let v4: 10 | 20 | 30 ;
// v4 = 15 X
let v5: "경차관" | "소방관";

let v6: any;
v6 = 123;
v6 = "123";
v6 = () => {};

function v7():void{
  console.log("hieeo")
}

function f2():never{
  throw new Error("some error");
}


let v8:object;
v8 = {name : "abc"};
// console.log(v8.prop1) X

let v9 = ( 1 | 3 | 5) & (3 | 5 | 7 );
v9 = 3;

type Width = number | string;
let width:Width;
width= 100;
width= "100";

