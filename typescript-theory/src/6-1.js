function Counter(){
 this.value = 0;
 this.add = amount => {
   this.value += amount;
 };
};

const counter = new Counter();
console.log(counter.value); //0
counter.add(5); //5
console.log(counter.value); //5

export default Counter;

function Counter2(){
  this.value= 0;
  this.add = function(amount){
    this.value += amount;
  };
};

const counter2 = new Counter2();
console.log(counter2.value); // 0 
counter2.add(5); 
console.log(counter2.value); // 5
const add2= counter2.add;
add2(5);
console.log(counter2.value); // 5

function Counter(){
  this.value=0;
  this.add = amount => {
    this.value += amount;
  };
}

const counter= new Counter();
console.log( counter.value); //0
counter.add(5);
console.log(counter.value); //5
const add = counter.add; 
add(5); 
console.log(counter.value); //10
//화살표 함수 : 정적 타입
//일반 함수 : 동적 타입

const counter3 = {
  value : 0,
  add : function(amount){
    this.value += amount;
  }
};

console.log(counter3.value); //0
counter3.add(5);
console.log(counter3.value); // 5
const add3 = counter3.add; 
add3(5);
console.log(counter3.value); //5

const counter3 = {
  value : 0,
  add : (amount) => {
    this.value += amount;
  }
};

console.log(counter3.value); //0
counter3.add(5);
console.log(counter3.value); //0
const add3 = counter3.add; 
add3(5);
console.log(counter3.value); //0
