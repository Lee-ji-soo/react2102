let a = [6, 5, 4, 3, 2]

//apply
console.log(Math.max.apply(null,a));
console.log(Math.min.apply(null,a));

//loop max
let max = a[0];
for (let i of a){
  if( i  > max){
    max = i;
  }
}

console.log('max', max);

// loop min
let min = a[0];
for(let i of a){
  if(i < min){
    min = i
  }
}

console.log('min', min);

//reduce acc:return된 값
const reducerOne = (acc, cur) => acc + cur;
const reducerTwo = (acc, cur) => acc - cur;
const reducerMax = (acc, cur) => acc > cur ? acc : cur;
const reducerMin = (acc, cur) => acc < cur ? acc : cur;
console.log("plus", a.reduce(reducerOne)) // 20
console.log("minus", a.reduce(reducerTwo)) // -8
console.log('max', a.reduce(reducerMax)) // 6
console.log('min', a.reduce(reducerMin)) // 2 

// 6 => 6 > 5 ? 6 
// 5 => 6 > 4 ? 6
// 4 => 6 > 3 ? 6
// 3 => 6 > 2 ? 6
// 2 => 6 > ?

// 6 => 6 < 5 : 5
// 5 => 5 < 4 : 4
// 4 => 4 < 3 : 3
// 3 => 3 > 2 : 2
// 2 => 2 > ? 

