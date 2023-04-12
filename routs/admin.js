const express=require('express')
const path=require('path');
const Router=express.Router();

Router.get('/add', (req, res,next)=>{
    res.send(`<form action='/admin/product' method='POST'><input type='text' name='product'>
        <button type='submit'>send</button></form>`)
})

Router.post('/product',(req, res, next)=>{
    console.log(req.body)
    res.redirect('/admin/add')
})

module.exports=Router;