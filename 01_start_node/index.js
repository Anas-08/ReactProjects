//  starting with node 

// console.log("testing")

// -----------------------------------------------------------------
// console.log(document) //error
// console.log(window)  // error


// -----------------------------------------------------------------
// console.log(globalThis) // returns object

// These objects are available in all modules.
// __dirname
// __filename
// exports
// module
// require()

// The process object provides information about, and control over, the current Node.js process.

// console.log(process)
// console.log(process.env)

// -----------------------------------------------------------------
// console.log(process.argv)

// $ node index.js 10 20 30 
// testing
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'D:\\Learning\\Web Development\\NodeJs\\01_start_node\\index.js',
//   '10',
//   '20',
//   '30'
// ]


// let num1 = process.argv[2]
// let num2 = process.argv[3]
// console.log(process.argv)
// console.log(Number(num1) + Number(num2))

// -----------------------------------------------------------------


// process.exit() // bydeault exit code is zero
// console.log("Last")

// -----------------------------------------------------------------

// console.log(__dirname)
// console.log(__filename)

// console.log(__dirname.split('NodeJs')[0])
// console.log(__dirname.split('NodeJs')[1])

// console.log(__dirname.split('\\'))
// console.log(__filename.split('\\'))

// -----------------------------------------------------------------

console.log(module)