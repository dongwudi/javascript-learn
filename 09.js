// ^ 匹配输入的开始
console.log(/^a/.exec('abc')) // ['a']
console.log(/^a/.exec('bac')) // null

// $ 匹配输入的结束
console.log(/a$/.exec('baca')) // ['a']
console.log(/a$/.exec('bac')) // null

// * 匹配前一个表达式0次或多次等价于 {0,}
console.log(/ab*/.exec('abbbbd'))  // ["abbbb"]
console.log(/ab*/.exec('dac'))  // ["a"]

// + 匹配前一个表达式1次或多次等价于 {1,}
console.log(/ab+/.exec('abbbbd'))  // ["abbbb"]
console.log(/ab+/.exec('dac'))  // null

// ? 匹配前面一个表达式0次或者1次。等价于 {0,1}
console.log(/ab?/.exec('abbbbd'))  // ["ab"]
console.log(/ab?/.exec('dac'))  // ["a"]

// . （小数点）匹配除换行符之外的任何单个字符
var str = "nay, an apple is on the tree";
var reg = /.n/g;
console.log(reg.exec(str)) //["an"]
console.log(reg.exec(str)) //["on"]

// (x) 匹配 'x' 并且记住匹配项，就像下面的例子展示的那样。括号被称为 捕获括号
//  \1、\2、\n 是用在正则表达式的匹配环节
// 在正则表达式的替换环节，则要使用像 $1、$2、$n 这样的语法
console.log(/(foo)(bar)\1\2/.exec('foobarfoobar')) //["foobarfoobar", "foo", "bar"]
console.log('foobarddfoobar'.replace(/(foo)(bar)/,'$2')) //barddfoobar

// (?:x) 匹配 'x' 但是不记住匹配项。这种叫作非捕获括号
console.log(/(?:foo){1,2}/.exec('foofoo2'))  // ['foofoo']
console.log(/(foo){1,2}/.exec('foofoo2')) // ['foofoo','foo']
console.log(/foo{1,2}/.exec('foofoo2')) // ['foo']