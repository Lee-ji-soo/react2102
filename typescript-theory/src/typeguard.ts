export{};

function print(value: number| string){
  if( typeof value ==="number"){
    console.log((value as number).toFixed(2));
  }else {
    console.log((value as string).trim());
  }
}

// typeguard
function print2(value:number|string){
  if(typeof value === "number"){
    console.log(value.toFixed(2));
  }else{
    console.log(value.trim())
  }
}

// discriminated union
interface Person{
  type: "a";
  name: string;
  age: number;
}

interface Product{
  type: "b";
  name: string;
  price: number;
}

function print3(value: Person | Product){
  if(value.type === "a"){
    console.log(value.name);
  }else{
    console.log(value.price);
  }
}

function isPerson(x: Person | Product) : x is Person{
  return (x as Person).age !== undefined;
}

function print4(value: Person | Product){
  if(isPerson(value)){
    console.log(value.age);
  }else{
    console.log(value.price);
  }
}

function print5(value: Person | Product){
  if("age" in value){
    console.log(value.age)
  }else{
    console.log(value.price);
  }
}





