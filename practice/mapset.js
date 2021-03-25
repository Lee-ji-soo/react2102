let m = new Map();
m.set("one", "1");
m.set(1, "one");
m.set(true, 1);
m.set(false, 0);

console.log(m.get("one"));
console.log(m.get(true));
console.log(m.has(true));
console.log(m.delete(1));
console.log(m.get(1));
console.log(m);
console.log(m.size);

for (var variable of m) {
  console.log(`running m : ${variable[0]}`)
  console.log(`running m : ${variable[1]}`)
}

console.log(m.keys());
console.log(m.values());
console.log(m.entries());


let temp = new Map([[1, 10], [2, 20], [3, 30], [4, 40]])
console.log(temp);

let s = new Set("abcdeeeee");
console.log(s.size);
s.add("f");
console.log(s.size);

for (var variable of s) {
  console.log(variable);
}

let ss = new Set("abcdeeeee".split(""));
console.log(ss);

ss.delete("a");
console.log(ss.has("a"));
ss.clear();
console.log(ss);
