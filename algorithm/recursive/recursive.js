let s = 0;
for( let i = 0; i<=100; i++){
 s += i;
}
console.log(s);
// O(n)

let n = 100;
console.log(n*(n+1)/2);
// O(1) 효율 차이가 많이 남. 

function f(n){
  if(n <= 1){
    return 1
  }
  return n + f(n-1)
};
//f(100)
//100 + f(99)
//99 + 98
// 
console.log('recursive', f(100))

function m(n){
  if(n <= 1){
    return 1
  }
  return n * m(n-1);
}
// m(5) 5 * m(4); = 5 * 24
// m(4) 4 * m(3); = 4 * 6
// m(3) 3 * m(2); = 3 * 2
// m(2) 2 * m(1); = 2 * 1
// m(1) 1

console.log(m(5));