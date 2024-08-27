// The node:fs module enables interacting with the file system in a way modeled 


const fs = require("fs")   // it will give both sync and async
// const fs = require("fs/promises")  // only give async

// import fs from "fs"

// console.log(fs)
let path = __dirname + "/"

// ----------------------------------------------------------

// creating file
//  for sync

// fs.writeFileSync(path + "test.txt","123")
// console.log(path)

// async

// fs.writeFile("test1.txt","file number 2, async",(err)=>{
//     if(err){
//         console.log("Error Occurred")
//     }else{
//         console.log("File Creaated")
        
//     }
// })

// ----------------------------------------------------------

// reading file || sync

// let fileData = fs.readFileSync("test1.txt") // return buffer string(unable to read)
// console.log("1")
// let fileData = fs.readFileSync("test1.txt", {encoding: "utf-8"})
// console.log(fileData)
// console.log("2")

// console.log("1")
// const data  = "a".repeat(500 * 1024 * 1024) // it will create 500 mb file 
// let data2 = fs.writeFileSync("abc.txt",data)
// console.log("2")

// reading file || Async 

// console.log("1")

// fs.readFile("test112.txt", {encoding:"utf-8"}, (err,data)  =>{
//     if(err){
//         console.log("File Not Found")
//     }else{
//         console.log(data)
//     }
// })
// console.log("2")


// ----------------------------------------------------------

//  for deleting files

// fs.writeFileSync("abc.txt","testing")

// fs.unlink("abc.txt",(err)=>{
//     if(err){
//         console.log("Error Occurred")
//     }else{
//         console.log("File Deleted")
//     }
// })

// ----------------------------------------------------------

// appending file
// Async
// fs.writeFileSync("abc.txt","First Line")

// fs.appendFile("abc.txt","\n Third Line \n",(err)=>{
//     if(err){
//         console.log("Error")
//     }else{
//         console.log("Success")
//     }
// })


// ----------------------------------------------------------

// for copying file
// async

// fs.copyFile("abc.txt","test1.txt",(err)=>{
//     if(err){
//         console.log("Error")
//     }else{
//         console.log("Copied")
//     }
// })

// ----------------------------------------------------------
// create folder 

// async
// fs.mkdir("createFolder/nested.js",{recursive:true},(err)=>{
//     if(err){
//         console.log("Error")
//     }else{
//         console.log("Created Folder")

//     }
// })

// for single it will work
//  fs.mkdir("simpleFolder",(err)=>{
//     if(err){
//         console.log("Error")
//     }else{
//         console.log("Created Folder")

//     }
// })

// ----------------------------------------------------------
// delete folder 
 
// for single it will work
// fs.rmdir("simpleFolder",(err)=>{
//     if(err){
//         console.log("Error")
//     }else{
//         console.log("Folder Deleted")
//     }
// })

// for nested folder
// fs.rm("createFolder",{recursive:true},(err)=>{
//     if(err){
//         console.log("Error")
//     }else{
//         console.log("Folder Deleted")
//     }
// })

// ----------------------------------------------------------

// readdirectory (shows all the files and folder inside the directory)-> return array
// fs.readdir(__dirname.replace("02_fs_module","01_start_node"),{recursive:true},(err,file)=>{
//     if(err){
//         console.log("Error")
//     }else{
//         console.log(file)
//     }
// })


// fs.readdir("nested",{recursive:true, withFileTypes:true},(err,file)=>{
//     if(err){
//         console.log("Error")
//     }else{
//         console.log(file)
//     }
// })

// const os = require("os")
// console.log(os.cpus().length)