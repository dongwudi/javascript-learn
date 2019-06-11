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

// x(?=y) 匹配'x'仅仅当'x'后面跟着'y'.这种叫做先行断言
console.log(/foo(?=x)/.exec('foofoo2')) // null
console.log(/foo(?=x)/.exec('fooxfoo2')) // ['foo']

// (?<=y)x 匹配'x'仅仅当'x'前面是'y'.这种叫做后行断言
console.log(/(?<=x)foo/.exec('xfoofoo2')) // ['foo']
console.log(/(?<=x)foo/.exec('fooxafoo2')) // null

// x(?!y) 匹配'x'仅仅当'x'后面不跟着'y',这个叫做正向否定查找
console.log(/x(?!y)/.exec('xc')) //['x']
console.log(/x(?!y)/.exec('xyc')) //null
console.log(/x(?!y)c/.exec('xdc')) //null 并不会匹配到()之后到内容

// x|y 匹配‘x’或者‘y’
console.log(/green|red/.exec('greenapple')) // ['green']
console.log(/green|red/.exec('redapple')) // ['red']

// {n} 匹配了前面一个字符刚好发生了n次  {n,m} 匹配前面的字符至少n次，最多m次
console.log(/a{2}/.exec('aad')) // ['aa']
console.log(/a{2}/.exec('aaad')) // ['aa']
console.log(/a{2,4}/.exec('aaad')) // ['aaa']

// [xyz] 一个字符集合。匹配方括号中的任意字符，包括转义序列.你可以使用破折号（-）来指定一个字符范围.对于点（.）和星号（*）这样的特殊符号在一个字符集中没有特殊的意义。他们不必进行转义，不过转义也是起作用的。
// eg: [a-z] 查找任何从小写 a 到小写 z 的字符
// eg: [A-Z] 查找任何从大写 A 到大写 Z 的字符
// eg: [A-z] 查找任何从大写 A 到小写 z 的字符
console.log(/[a-d]/.exec('ade')); // ['a']

// [^xyz] 一个反向字符集。也就是说， 它匹配任何没有包含在方括号中的字符。你可以使用破折号（-）来指定一个字符范围。
console.log(/[^a-d]/.exec('ade')); // ['e']

// \d 匹配一个数字 等价于[0-9]

// \D 匹配一个非数字字符 等价于[^0-9]

// \s 匹配一个空白字符，包括空格、制表符、换页符和换行符

// \S 匹配一个非空白字符 

// \w 匹配一个单字字符（字母、数字或者下划线） 等价于[A-Za-z0-9_]

// \W 匹配一个非单字字符 等价于[^A-Za-z0-9_]
