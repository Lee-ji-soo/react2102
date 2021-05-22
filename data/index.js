const data = require("./data.json");
let postArr = [];
//forEach: return값이 없다.
//map : return값이 있다. 배열을 반환한다.
//reduce : return값이 있다. [] , {} , num .. 을 반환한다.

// data 가공하기
// 1.
// reduce - Object.keys(list)
data.forEach(datum => {
  let post = Object.keys(datum);
  const post_nick = post.reduce(
    (acc,cur)=>{
      return {
        ...acc,
        nick:{...acc.nick, [cur]: datum[cur] }
      }
    },{ nick:{} })
  postArr.push(post_nick)
  return;  
})
console.log('arrrrr', postArr)

// 2.
// 
