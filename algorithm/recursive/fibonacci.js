// 1 1
let a = 1;
let b = 1;
for(let i=0; i<6; i++){
  let c = a + b;
  a = b;
  b = c;
}

console.log(b);

//recursive

let add = 0 ;
function fibonacci(x){
  if(x === 1 || x === 2){
    console.log("x===1 || x===2",x)
    return 1;
  }
  console.log("x", x);
  return fibonacci( x-1 ) + fibonacci( x-2 );
}
console.log('fibonacci', fibonacci(5));
// 5 f(4) + f(3)
// 4 f(3) + f(2) 3 f(3) + f(2)/