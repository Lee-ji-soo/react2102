const rockInherit = [1, 2, 1, 4, 3];
const dogs = [{
  "name": "ruby",
  "age": "95",
  "jump": "3",
  "weight": "4"
}, {
  "name": "peach",
  "age": "95",
  "jump": "3",
  "weight": "3"
}, {
  "name": "sea",
  "age": "95",
  "jump": "2",
  "weight": "1"
}, {
  "name": "cobol",
  "age": "95",
  "jump": "1",
  "weight": "1"
}]

function survival(rockInherit, dogs){
  let survived = [];
  for(dog of dogs){
    let position = 0;
    let fail = false;
    while(position <= rockInherit.length){
      position += parseInt(dog["jump"], 10);
      rockInherit[position-1] -= parseInt(dog["weight"], 10)
      if(rockInherit[position-1] < 0){
        console.log("풍덩")
        fail = true;
        break;
      }
    }
    if(!fail){
      survived.push(dog["name"]);  
    }
  }
  return survived;
}

console.log(survival(rockInherit, dogs))
