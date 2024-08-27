

function addFunction(a,b){
    return a + b
}
function subFunction(a,b){
    return a - b
}
function mulFunction(a,b){
    return a * b
}

// console.log( addFunction(10,20))
// module.exports = "Anas"
// module.exports = addFunction // passing single

// module.exports = { addFunction, subFunction, mulFunction} // passing object
module.exports = {addFun : addFunction, subFun: subFunction, mulFun: mulFunction} // passing object
console.log(module)

// console.log(module.exports)