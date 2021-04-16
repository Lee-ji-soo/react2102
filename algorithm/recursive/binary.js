
// Q1. 11 을 2진법으로 바꿔라 binary change
// 2  11  1
// 2   5  1
// 2   2  0
//     1

//반복문
let result = '';
let x = 11; 

while(true){
  if(x % 2 === 0){
    result += "0"
  }else{
    result += "1"
  }
  x = Math.floor(x / 2)
  if(x === 1 || x === 0){
    result += String(x);
    break;
  }
}

console.log('binary-loop', result.split("").reverse().join(""));

//재귀함수
function binary(x){
  if(x === 1 || x === 0){
    return x
  }
  return binary(Math.floor(x / 2)) + String(x % 2)
};

console.log('binary-recursive', binary(11));

// binary(11)   return  binary(5) + String(1)
// binary(5)    return  binary(2) + String(1)
// binary(2)    return  binary(1) + String(0)
// binary(1)    return  String(1)


//Q2. 문자열 뒤집기

//loop
let resultText = "";
let str = "soolee";
while(true){
  if(str.length === 1){
    resultText += str ; 
    // resultText = str + resultText;
    break;
  }
  let strArr = str.split("");
  resultText += String(strArr.pop());
  // resultText = String(strArr.pop()) + resultText;
  console.log('2', resultText)
  str = strArr.join("");
}
console.log("reverse-text_recursive", resultText)


//recursive
let str2 = "soolee"
function reverseText(str){
  console.log(str)
  if( str.length === 1){
    return str
  }
  return String(str[str.length-1]) + reverseText(String(str.slice(0, str.length-1)))
}
console.log('reverseText', reverseText(str2))