// const express = require('express');
// const app = express();
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const cookieParser = require('cookie-parser');
// app.use(cookieParser());
// app.get('/', (req, res) => {
//     let token = jwt.sign({email:"harsh@example.com"},"secret");
//     res.cookie('token', token);
//     console.log(token);
// });

// app.get("/read",(req,res)=>{
//     console.log(req.cookies.token);
//     })
    
// // app.get('/', (req, res) => {
// //     bcrypt.genSalt(10, function(err, salt) {
// //         bcrypt.hash("lolololololo", salt, function(err, hash) {
// //             console.log(hash);
// //             bcrypt.compare("lolololololo", hash, function(err, result) {
// //                 console.log(result);
// //             });
// //         });
// //     });
// // });

// app.listen(3000);
const cookieParser = require('cookie-parser');
const usermodel = require('./models/user');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.get('/', (req, res) => {
    res.render("index");
})
app.post('/create', async (req, res) => {
    let{username, email, password, age} = req.body;
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, async function(err, hash) {
            
            let createduser = await usermodel.create({
                username,
                email,
                password:hash,
                age 
            });
            
            res.cookie('token', jwt.sign({email},"shhhhhhhhh"));
            res.send(createduser);
        });
    });
    
})
app.get('/login', async (req, res) => {
   res.render("login");
}); 
app.post('/login', async (req, res) => {
   let user = await usermodel.findOne({email:req.body.email});
   if(!user)return res.send("something went wrong");
    bcrypt.compare(req.body.password, user.password, function(err, result) {
        if(result){
            let token = jwt.sign({email:req.body.email},"shhhhhhhhh");
            res.cookie('token', token);
             res.send("yes you can login");
        }
        else
     {
        res.send("no you cannot login");
        res.redirect('/login');
     } 
    })
        
        
});
         
   
app.get("/logout",(req,res)=>{
    res.cookie('token',"");
    res.redirect('/');
    
})
app.listen(3000);
