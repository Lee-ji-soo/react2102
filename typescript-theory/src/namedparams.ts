export{};

//named parameters
function getText({
  name,
  age =15,
  language
}:{
  name: string;
  age?: number;
  language?: string;
}): string{
  const nameText = name.substr(0, 10);
  const ageText = age >= 35 ? "senior" : "junior";
  return `name: ${nameText}, age: ${ageText}, language: ${language}`
}

console.log(getText({ name: "soolee"}))

// interface
interface IgetText{
  name: string;
  age?: number;
  language?: string
}
function getText2({name, age =15,language}:IgetText): string{
  const nameText = name.substr(0, 10);
  const ageText = age >= 35 ? "senior" : "junior";
  return `name: ${nameText}, age: ${ageText}, language: ${language}`
}

console.log(getText2({ name: "soolee"}))


//typescript refactoring

function getText3({ 
  name, 
  age = 15, 
  language
}: { 
  name: string; 
  age?: number; 
  language?: string;
}):string{
  return `${name},${age},${language}`
}

console.log(getText3({ name: "soolee" }))