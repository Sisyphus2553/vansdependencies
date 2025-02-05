const { clear } = require('console');
const express = require('express');
const app = express();
const path = require('path')
app.use(express.json());//gives format to request
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));//sets a specific destination for static files
app.set('view engine','ejs');//backend will render ejs pages
app.get("/",function(req,res){
    res.render("index.ejs");
});
app.get("/route1/:username/:age",function(req,res){//the frontend sends the name after profile to backend
    res.send(`welcome ${req.params.username} ${req.params.age}`);

});

app.listen(3000,()=>{
    console.log("hello ji");
    
});
