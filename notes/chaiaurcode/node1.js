//const fs = require('node:fs');
// fs.writeFile("he hello","he hellonkaise ho",function(err){
//     if(err){
//         console.error("error");
        
//     }else console.log("done");
    
// })
// fs.appendFile("he hello","he hello",function(err){
//     if(err){
//         console.error("error");
        
//     }else console.log("done");
    
// })
// fs.rename("he hello","hey.txt",function(err){
//     if(err){
//         console.error("error");
        
//     }else console.log("done");
    
// })
// fs.copyFile("hey.txt","copy.txt",(err)=>{
//     if(err){
//                 console.error("error");
                
//              }else console.log("done");
// })
// fs.unlink("hey.txt",(err)=>{//deletes file
//     if(err){
//                 console.error("error");
                
//              }else console.log("done");
// })
// fs.rm("./dell",{recursive:true},(err)=>{//recursive deletes folder within folder
//     if(err){
//                 console.error("error");
                
//              }else console.log("done");
// })
// const h = require('http');
// const server = h.createServer((req,res)=>{
//     res.end("hello world");
// })
// server.listen(4000);
//installing npm i module_name
//console.log("hello");
//for custom script npm run jsfile
//framework=how to do something and it  has to be done like that but things can be done in between the flow
//express : manages everything from receiving the request and giving the response


const express = require('express')
const app = express()
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//the request is sent to the server in form of blob and it converted to json 
//routes create krna
app.use((req,res,next)=>{
    console.log("middleware chalao");
    next();
    
});//middleware
app.use((req,res,next)=>{
    console.log("middleware chalao phirse");
    next();
    
});//middleware
app.get('/', function (req, res) {//functions are defined for different routes
  res.send('Hello World')
})
//example of route = youtube.com/ here everything after and including / is route
//app.listen(3000)
app.get("/profile", function (req, res) {//functions are defined for different routes
    res.send("hi")
})
app.listen(3000)


//middleware:work to do before reaching route and after being requested 

//cookie : a string given to the browser to associate it with the request from the user to identify the user    once the user logs out the session end used in authentication
 