export { };
// 정적타입
function makeArray(defaultValue: number, size: number): number[];
function makeArray(defaultValue: number, size: number): number[];

function makeArray(defaultValue: number | string | boolean, size: number): Array<number | string | boolean> {
  const arr: Array<number | string | boolean> = [];
  for (let i = 0; i < size; i++) {
    arr.push(defaultValue);
  };
  return arr;
}

const arr1 = makeArray(1, 10);

// generic example 1
function makeArray2<T>(defaultValue: T, size: number): T[] {
  const arr: T[] = [];
  for (let i = 0; i < size; i++) {
    arr.push(defaultValue);
  }
  return arr;
}

const arr2 = makeArray2<number>(1, 10);
const arr3 = makeArray2(true, 10); // 자동 추론 타입

// generic example 2
class Stack<D>{
  private items: D[] = [];
  push(item: D) {
    this.items.push(item);
  }
  pop() {
    return this.items.pop();
  }
}

const numberStack = new Stack<number>();
numberStack.push(10);
const v1 = numberStack.pop();
const stringStack = new Stack<string>();
stringStack.push("a");
const v2 = stringStack.pop();

let myStack: Stack<number>;
myStack = numberStack;
// myStack = stringStack; //not working

// A extends B example1
function identity<T extends number | string>(p1: T): T {
  return p1;
}
identity(1);
identity('1');
// identity([]); // not working

// A extends B example2 제네릭에서 타입 제한
interface Person {
  name: string,
  age: number
}

interface Korean extends Person {
  liveInSeoul: boolean;
}

function swapProperty<T extends Person, K extends keyof Person>(
  p1: T,
  p2: T,
  key: K
): void {
  const temp = p1[key];
  p1[key] = p2[key];
  p2[key] = temp;
}

const p1: Korean = {
  name: "홍길동",
  age: 23,
  liveInSeoul: true
};

const p2: Korean = {
  name: "kimsatgat",
  age: 31,
  liveInSeoul: false,
}
swapProperty(p1, p2, "age")

