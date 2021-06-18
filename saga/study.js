function* generatorFunction() {
  console.log('안녕하세요?');
  yield 1;
  console.log('제너레이터 함수');
  yield 2;
  console.log('function*');
  yield 3;
  return 4;
}

const generator = generatorFunction();
generator.next()


function* sumGenerator() {
  console.log('sumGenerator이 시작됐습니다.');
  let a = yield;
  console.log('a값을 받았습니다.');
  let b = yield;
  console.log('b값을 받았습니다.');
  yield a + b;
} 

const sum = sumGenerator();
//sum.next(1) 
//sum.next(2) {value:3}

function* watchGenerator(){
  console.log("모니터링 시작");
  while(true){
    const action = yield;
    if(action.type === "HELLO"){
      console.log("안녕 하세요.")
    }
    if(action.type === "BYE"){
      console.log("안녕히 가세요")
    }
  }
}

const watch = watchGenerator();

watch.next(); // 모니터링 시작
 watch.next('HELLO') // 안녕하세요
  watch.next("BYE") // 안녕히 가세요