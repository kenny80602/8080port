const express = require("express")

const app = express()


app.get("/",(req,res,next)=>{
    console.log("8080 port");
    res.end("8080 port")
})

app.listen(8080,()=>{
    console.log("8080 port is ok");
})