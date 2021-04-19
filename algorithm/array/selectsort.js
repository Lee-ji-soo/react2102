//선택정력
let a = [10, 11, 9, 2, 3, 6, 5, 4];
let sortedArr = [];


const reducerMin = (acc,cur) => { return acc < cur ? acc : cur; }

function min2(a){
  return a.reduce(reducerMin);
}

function min1(a){
  let min = a[0]
  for( i of a ){
    if ( i < min ){
      min = i ;
    } 
  }
  return min;
};

function findIndex(minNum){
  for (let i=0; i<a.length; i++){
    if(a[i] === minNum){
      return i
    }
  }
}

for(let i = 0; i < 8; i++){
  minNum = min1(a);
  sortedArr.push(minNum);
  a.splice(findIndex(minNum), 1);
}

console.log(sortedArr);
