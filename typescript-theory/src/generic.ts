export{};

function makeNumberArr(defaultValue: number, size: number) : number[]{
  const arr : number[] = [];
  for(let i=0; i< size; i++){
    arr.push(defaultValue);
  }
  return arr;
}

function makeStringArr(defaultValue: string, size: number) : string[]{
  const arr: string[] = [];
  for (let i=0; i<size; i++){
    arr.push(defaultValue);
  }
  return arr;
}

const arr1 = makeNumberArr(1,10);
const arr2 = makeStringArr("aoo",10);

// -> 함수 오버로드를 사용해서 아래와 같이 중복되는 코드를 줄일 수 있습니다.

function makeArray(defaultValue: number, size: number): number[];
function makeArray(defaultValue: string, size: number): string[];
function makeArray(
  defaultValue: number | string,
  size: number | string
) : Array<number | string>{
  const arr: Array<number | string> = [];
  for( let i =0; i<size; i++){
    arr.push(defaultValue);
  }
  return arr;
}

