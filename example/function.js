let _ = require('lodash')

// _.rest 重新设定方法参数
var say = _.rest(function(what, names) {
  console.log(what)
  console.log(names)
}, 1) // 设置成 0 即可将所有参数变为数组形式传入

say('hello', 'fred', 'barney', 'pebbles')