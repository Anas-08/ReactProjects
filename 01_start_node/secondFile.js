// const add = require("./calFun")
const {addFun, mulFun, subFun} = require("./calFun")

// console.log(add(10,20)) // getting single function

console.log( "Addition = ", addFun(100,200)) // getting an object
console.log("Subtraction = " ,subFun(300,200)) // getting an object
console.log(" Multiply = " , mulFun(30,50)) // getting an object

// console.log( "Addition = ", add.addFun(10,20)) // getting an object
// console.log("Subtraction = " , add.subFun(30,20)) // getting an object
// console.log(" Multiply = " , add.mulFun(3,5)) // getting an object

console.log(module)

// console.log(add)
// let result = add.addFun(10,20)
 
// console.log(result)