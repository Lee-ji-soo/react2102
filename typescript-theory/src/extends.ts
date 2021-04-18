export {};

//제네릭의 extends
function identity<T extends string|number| Number[] > (p1:T){
  return p1
}

identity(1);
identity("2");
identity([1,2,3]);
// identity(["1","2","3"]) // String[] 타입이 규정되어 있지 않기 때문에 실행 불가능

//Class의 extends

interface Person{
  name: string;
  age: number;
}

interface Korean extends Person{
  liveInSeoul : boolean;
}

function swapProperty<T extends Person, K extends keyof Person>(
  p3: T,
  p4: T,
  key : K
): void{
  const temp = p3[key];
  p3[key] = p4[key];
  p4[key] = temp;
}

const p3: Korean ={
  name: "홍길동",
  age: 13,
  liveInSeoul: true
}

const p4: Korean = {
  name: "hong",
  age: 14,
  liveInSeoul: false
}

swapProperty(p3, p4, "age")

