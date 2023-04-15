const express=require('express');
const path =require('path');


const admin=require('./admin.js');
const shop=require('./shop');
const contactus=require('./contactus')
const app=express();

app.use(express.static(path.join(__dirname,'../','views')))
const bodyParse=require('body-parser');
const exp = require('constants');
app.use(bodyParse.urlencoded({extended:true}));


app.use('/admin',admin);
app.use(shop);
app.use(contactus);
/*
app.get('/',(req, res)=>{
   // res.sendFile(path.join(__dirname,'../','views','shop.html'))
})
*/
/*
app.use((req, res, next)=>{
 res.status(404) .sendFile(path.join(__dirname,'../','views','errorpage.html'))
})*/

//use controller for error page
const errorp=require('../controler/errorpage');
app.use(errorp.errorpage)
app.listen(3000, ()=>console.log('Server Running...'))
