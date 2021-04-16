export{};

function getParam(this: string, index: number): string{
  const params= this.split(',');
  if(index < 0 || params.length <= index){
    return "";
  }
  return this.split(",")[index];
}

interface String {
  getParam(this: string, index: number): string;
}

String.prototype.getParam = getParam;
console.log('string, 23, 1414'.getParam(3));

interface Object{
  getShortKeys(this: object): string[];
}

Object.prototype.getShortKeys = function(){
  return Object.keys(this).filter(key =>  key.length <= 3);
}

const obj = {
  a: 1,
  bb: 2,
  ccc: 3,
  dddd: 4
};

console.log(obj.getShortKeys());
