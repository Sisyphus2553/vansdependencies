const express = require('express');
const app = express();
const mongoose = require('mongoose');
const usermodel = require('./models/user');
const postmodel = require('./models/post');
const cookieparser = require('cookie-parser');
app.set('view engine','ejs');
app.use(cookieparser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get('/',(req,res)=>{
    res.send('Hello World');
})
app.get('/create', async (req,res)=>{
    let user = await usermodel.create({
        username:'Sumit',
        email:'sumit@123',
        age:21
})
res.send(user);
})
app.get('/post/create', async (req,res)=>{
  let post = await postmodel.create({
    postdata:"hello sabhi log",
    user:"679c92692c13a65fda01e322"

   })
   let user = await usermodel.findOne({_id:"679c92692c13a65fda01e322"})
   await user.posts.push(post._id);
   await user.save();
   res.send({post,user});
})

app.listen(3000);