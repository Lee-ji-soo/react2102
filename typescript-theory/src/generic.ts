export{};

// 기본 코드 작성
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

const arr3 = makeArray(1,10);
const arr4 = makeArray("soo", 10);

//제네릭을 사용하여 더욱 간편하게 사용
function makeGenericArray<T>(defaultValue: T, size: number) :T[]{
  const arr : T[] = [];
  for(let i=0; i<size; i++){
    arr.push(defaultValue);
  }
  return arr;
}

const arr5 = makeGenericArray<number>(1,10);
const arr6 = makeGenericArray<string>("string",10);
const arr7 = makeGenericArray(1, 10); // 타입스크립트는 똑똑하기 때문에 알아서 어떤 타입의 배열이 반환될 지 압니다.
const arr8 = makeGenericArray("soo", 10); // 타입스크립트는 똑똑하기 때문에 알아서 어떤 타입의 배열이 반환될 지 압니다.

