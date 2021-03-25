let data = [" +--+ - + -", "  + --- + - +", " +- - + - + -", "+ - + - + - +"];
let result = "";
for (let d of data) {
  d = d.replace(/\s/gi, "").replace(/\+/gi, 1).replace(/-/gi, 0);
  result += String.fromCharCode(parseInt(d, 2));
}

console.log(result);
