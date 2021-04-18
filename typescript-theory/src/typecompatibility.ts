export{}
//호환성, 할당가능한지 확인

function func1(a:number, b:number |string){
  const v1:number | string = a; // number => number | string 할당 가능
  // const v2:number=b;  // number|string -> number 할당 불가능
}

function func2(a:1 | 2){
  // const v1: 1 | 3 =a; // 1|2 -> 1|3 할당 불가능
  const v2: 1 | 2 | 3 =a; // 1|2 -> 1|2|3 할당 가능
}

//인터페이스 A가 인터페이스 B로 할당 가능하기 위한 조건
//1. B에 있는 모든 필수 속성의 이름이 A에도 존재해야 한다.
//2. 같은 속성 이름에 대해 A의 속성이 B의 속성에 할당 가능해야 한다.

// 타입이 선언된 속성이 모두 같다면 서로 할당이 가능하다.
interface A {
  name: string,
  age: number
}

interface B {
  name: string,
  age: number
}

const person : A = {name: 'soo', age: 20};
const person2 : B = person;

// 타입이 선언되는 만큼 포용 범위가 더 좁아진다.
interface C {
  name: string
}

interface D {
  name: string;
  age: number
}

const obj = {name:'soo', age: "20", city:"seoul"};
const person3 : C = obj; // C의 타입이 더 넓다. obj를 수용할 수 있다. 
// const person4 : D = obj; // D의 타입에 age의 타입이 number 설정되어 있어서 할당 불가

// 옵셔널 타입은 포용 범위를 좁히지 않는다. 
interface E {
  name: string;
  age? : number
}

interface F {
  name: string;
  age: number
}

const obj2 = {name:"stoo"}
const person4 : E = obj2; // E 타입의 age 선언이 옵셔널로 되어있기 때문에 할당 가능
// const person5 : F = obj2;  // F 타입에 age 선언으로 obj2보다 포용 범위가 좁아졌기 떄문에 할당 불가

//함수의 할당
//함수 타입 A가 함수 타입 B에 할당되는 조건
//1. A의 매개변수 개수가 B의 매개변수 개수보다 적어야한다.
//2. 같은 위치의 매개변수에 대해 B의 매개변수가 A의 매개변수로 할당 가능해야 한다.
//3. A의 반환값은 B의 반환값으로 할당 가능해야 한다.

type F1 = (a: number, b:string) => string;
type F2 = (a: number, b:string | number) => string;
type F3 = (a: number) => string;
type F4 = (a: number) => number | string;
let f1: F1 = (a, b) => `${a} ${b.length}`;
let f2: F2 = (a, b) => `${a} ${b}`;
let f3: F3 = (a) => `${a}`;
let f4: F4 = (a) => (a < 10 ? a : "too big");

f1 = f3; // f1(1, "h3")
// f3 = f1; // f3(1) 매개변수가 부족해서 할당 불가능

f1 = f2; // f1(1, "h3")
// f2 = f1; // f2(1,1) f2의 매개변수 포용범위가 f2매개변수 포용범위보다 넓기 때문에 할당 불가능 

f4 = f3; // f4(1)
// f3 = f4; // f3(1) f3의 반환값이 f4의 반환값보다 포용범위가 좁기 때문에 할당 불가능!
 