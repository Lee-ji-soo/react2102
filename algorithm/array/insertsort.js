let arr = [5, 10, 66, 77, 54, 32, 11, 15];
let sortedArr = [];
let arrLength = arr.length;

const findIndex = (sortedArr, popped) => {
  for( let i in sortedArr){
    if( popped < sortedArr[i]){
     return i;
    }
  }
  return sortedArr.length;
};

for(let i=0; i<arrLength; i++){
  let popped = arr.shift(i);
  let index = findIndex(sortedArr, popped);
  sortedArr.splice(index, 0, popped);
}

console.log(sortedArr);
