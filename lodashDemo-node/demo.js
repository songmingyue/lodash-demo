let _ = require("lodash");
//chunk 方法，chunk传两个参数，第一个是数组，第二个是截取数组的长度，如果长度不够，则默认为原数组长度
let demo = _.chunk(['a','b','c'],6)
console.log(demo)