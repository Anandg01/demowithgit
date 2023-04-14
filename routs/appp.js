const express=require('express');
const path =require('path');


const admin=require('./admin.js');
//const shop=require('./shop');

const app=express();

app.use(express.static(path.join(__dirname,'../','views')))
const bodyParse=require('body-parser');
const exp = require('constants');
app.use(bodyParse.urlencoded({extended:true}));


app.use('/admin',admin);
app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname,'../','views','shop.html'))
})

app.get('/contactus',(req, res)=>{
    res.sendFile(path.join(__dirname,'../','views','contacts.html'))
})
app.post("/success",(req, res)=>{
    res.sendFile(path.join(__dirname,"../",'views','succes.html'))
})

app.use((req, res, next)=>{
 res.status(404) .sendFile(path.join(__dirname,'../','views','errorpage.html'))

})

app.listen(3000, ()=>console.log('Server Running...'))
