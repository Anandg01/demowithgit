const express=require('express');

const admin=require('./admin.js');
const shop=require('./shop');

const app=express();
const bodyParse=require('body-parser');
app.use(bodyParse.urlencoded({extended:true}));

app.use('/admin',admin);
app.use('/shop',shop);

app.use((req, res, next)=>{
    res.status(404).send(`<h1>Page not found</h1>`)
})

app.listen(3000, ()=>console.log('Server Running...'))
