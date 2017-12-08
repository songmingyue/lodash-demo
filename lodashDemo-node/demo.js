let _ = require("lodash");
// //chunk 方法，chunk传两个参数，第一个是数组，第二个是截取数组的长度，如果长度不够，则默认为原数组长度
let demo = _.chunk(['a','b','c'],6)
console.log(demo)


// var users = [
//   { 'user': 'barney', 'age': 36, 'active': false, 'pets': ['hoppy'] },
//   { 'user': 'fred',   'age': 40, 'active': true, 'pets': ['baby puss', 'dino'] }
// ];
// var ss = _.pluck(_.where(users, { 'age': 36, 'active': false }), 'user')
// console.log(ss);
// // => ['barney']

// _.pluck(_.where(users, { 'pets': ['dino'] }), 'user');