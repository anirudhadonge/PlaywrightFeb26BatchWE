/**
 * toFixed()
 * toPrecision()
 * toString()
 * toExponential()
 */

let myNum = 1234.1232456

console.log(myNum.toFixed(4)) //"1234.1232"
console.log(typeof(myNum.toFixed(2)))

console.log(myNum.toPrecision(5)); // 1.23E3 = 1234

console.log(myNum.toString())
console.log(typeof(myNum.toString()))

console.log(myNum.toExponential(4))