export{};

function getText(name: string, age: number, language?:string): string{
  const nameText = name.substr(0, 10)
  const ageText = age >= 35 ? "senior" : "junior";
  const languageTxt= language ? language.substr(0, 10):"";
  return `name: ${nameText}, age:${ageText}, languageText:${languageTxt}`
}

getText('soo', 28, 'kor');
getText('soo', 28);
// getText('soo', 28, 12); X

const getString: (name: string, age: number)=> string = function(number,age){
  return `${name}: ${age}`
}

getString("name", 13)


function getText2(name:string, ...rest: number[]):string{ //rest : 나머지 모두 
  return``
}
console.log(getText2("mike", 1, 2, 3))