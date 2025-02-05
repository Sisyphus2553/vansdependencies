
const express = require('express');
const fs = require('fs');

const app = express();//express has to be included in all folders by installing it
const path = require('path');
app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,"public")))
app.get("/",(req,res)=>{
    fs.readdir(`./files`,function(err,files){
         res.render("index.ejs",{files:files});
    })  
})
app.get("/",(req,res)=>{
  res.render("index.ejs")
})
app.get("/file/:filename", (req, res) => {
  const filePath = path.join(__dirname, "files", req.params.filename);

  fs.unlink(filePath, (err) => {
      if (err) {
          console.log("File deletion error:", err);
          return res.status(404).send("File not found");
      }
      res.redirect("/"); // Redirect to refresh the task list
  });
});
app.get("/file/:filename",(req,res)=>{
  const filepath = path.join(__dirname,"files",req.params.filename);
  fs.readFile(`./files/${req.params.filename}`,"utf-8",(err)=>{
    console.log("error");
    
  })
})


app.post("/create",(req,res)=>{
   fs.writeFile(`./files/${req.body.forms.split(' ').join('')}.txt`,req.body.text,function(err){
     res.redirect("/");
   })
})

app.listen(3000);