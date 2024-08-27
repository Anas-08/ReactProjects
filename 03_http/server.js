const http = require("http")
const fs = require("fs")
// console.log(http)

const server = http.createServer((req, res)=>{
    const filepath = __dirname + "/index.html"
    console.log(req.url)
   
    // fs.readFile(path, {encoding:"utf-8"},(err,data)=>{
    //     if(err){
    //         throw new Error("Not FOund")
    //     }else{
    //         res.end(data)
    //     }
    // })
    // res.end("<h1>This is my server</h1>")
    console.log(req.method)

    if(req.url == "/" || req.url == "/about"){
        let path = req.url.split("/")[1].toUpperCase()
        // path = path == "" ? "index" : path
        fs.readFile(filepath, {encoding:"utf-8"},(err,data)=>{
            if(err){
                throw new Error("Not FOund")
            }else{
               data = data.replace("[path]", path == "" ? "index" : path)
                res.end(data)
            }
        })
    }else{
        return res.end(JSON.stringify({message:"Not Found"}))
    }

})

server.listen(3000,()=>{
    console.log("Server Started")
})