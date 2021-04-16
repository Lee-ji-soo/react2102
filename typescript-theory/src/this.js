function Counter(){
  this.value = 0;
  this.add = amount =>{
    this.value +=amount;
  }
}

const counter = new Counter();
console.log(counter.value); // 0
counter.add(5);
console.log(counter.value); // 5

function Counter2(){
  this.value = 0;
  this.add = function(amount){
    this.value += amount;
    // this === global
  };
}

const counter2 = new Counter2();
console.log(counter2.value); //0
counter2.add(5);
console.log(counter2.value); // 5
const add2 = counter2.add;  // = function(amount){this.value += amount}
add2(5); // = function(5){this.value += 5}
console.log(counter2.value); // 5

const counter3 = {
  value:0,
  add: function(amount){
    this.value += amount;
  }
}

console.log(counter3.value);
counter3.add(5);
console.log(counter3.value);
const add3 = counter3.add;
add3(5);
console.log(counter3.value);
