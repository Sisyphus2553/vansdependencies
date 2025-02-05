const express = require('express');

const usermodel = require('./usermodel');
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World');
    });
app.get('/create', async (req, res) =>{

 try{
    let userID = await usermodel.create({
        name: 'Sumit',
        user: 'sumit123',
        email: 'SumitkrrA'
    })
   

    res.send(userID);
    }catch(err){
        res.send(err);
    }
});
app.get('/update', async (req, res) =>{
    let updateuser = await usermodel.findOneAndUpdate({name: 'Sumit'}, {name: 'Sumit Kumar'});
    res.send(updateuser);
    });
app.get("/read", async (req, res) => {
    let users = await usermodel.find({name:"Sumit"});
    res.send(users);
    });
    app.get('/delete', async (req, res) => {
        let deleteUser = await usermodel.findOneAndDelete({name: 'Sumit'});
        res.send(`the data ${deleteUser} is deleted`);
        });

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    });


