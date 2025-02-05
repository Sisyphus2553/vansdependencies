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
const postmodel = require('./models/post'); 
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const crypto = require('crypto');
const path = require('path');
const multer  = require('multer')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { log } = require('console');
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());


app.get('/', (req, res) => {
    res.render("index");
})
app.post('/register', async (req, res) => {
    let{username, email, password, age,name} = req.body;
    let user = await usermodel.findOne({email})
    if(user)return res.render("index");
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, async function(err, hash) {
            
            let user = await usermodel.create({
                username,
                name,
                email,
                password:hash,
                age 
            });
            
            res.cookie('token', jwt.sign({email:email,userid:user._id},"shhhhhhhhh"));
            res.redirect('profile');
        });
    });
    
})
app.get('/login', async (req, res) => {
    res.render("login");
}); 
app.get('/profile',isLoggedIn,async (req,res) => {
    let user  = await usermodel.findOne({email:req.user.email}).populate("posts");
    res.render("profile",{user}) 
}); 

app.get('/like/:id',isLoggedIn,async (req,res) => {
    let post  = await postmodel.findOne({_id: req.params.id}).populate("user");
    if(!post.likes.includes(req.user.userid)){
        post.likes.push(req.user.userid);
    }else{
     post.likes.splice(post.likes.indexOf(req.user.userid),1);
    }
        await post.save();
    
    
    res.redirect("/profile")
    
});
app.get('/edit/:id',isLoggedIn,async (req,res) => {
    let post  = await postmodel.findOne({_id: req.params.id}).populate("user");
    res.render("edit",{post});
    
});  
app.get('/test',isLoggedIn,async (req,res) => {
   res.render("test");
});
app.post('/upload',upload.single("image"),(req,res) => {
    console.log(req.file);
    // res.send("done");
});
    
app.post('/update/:id',isLoggedIn,async (req,res) => {
    let post  = await postmodel.findOneAndUpdate({_id: req.params.id},{content:req.body.content});
    res.redirect("/profile");
    
});  
app.post('/post',isLoggedIn,async (req,res) => {
    let user  = await usermodel.findOne({email:req.user.email});
    let {content} = req.body;
     let post = await postmodel.create({
        user:user._id,
        content
    })
  user.posts.push(post._id) ;
  await user.save();
  res.redirect('/profile');
}); 
app.post('/login', async (req, res) => {
    
    let {email,password}=req.body
    let user = await usermodel.findOne({email});
    if(!user)return res.send("something went wrong");
    bcrypt.compare(password, user.password, function(err, result) {
        if(result){
            res.cookie('token', jwt.sign({email:email,userid:user._id},"shhhhhhhhh"));
             res.redirect("/profile");
        }
        else
     {
        res.redirect('/login');
     } 
    })
        
        
});
         
   
app.get("/logout",(req,res)=>{
    res.cookie('token',"");
    res.redirect('/');
    
})
function isLoggedIn(req,res,next){
    if(req.cookies.token==="")res.send("You must be logged in")
    else{
    let data = jwt.verify(req.cookies.token,"shhhhhhhhh");
    req.user = data;
    }
    next();
    

}
app.listen(3000);
