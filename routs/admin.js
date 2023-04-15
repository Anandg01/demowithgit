const express=require('express')
const path=require('path');
const Router=express.Router();
const productcontroler= require('../controler/product');

/*
Router.get('/add', (req, res,next)=>{
  // res.send(`<form action='/admin/product' method='POST'><input type='text' name='product'>
    //    <button type='submit'>send</button></form>`)
   res.sendFile(path.join(__dirname,'../','views','addproduct.html'))

})
*/
//use controller
Router.get('/add',productcontroler.get)

Router.post('/product',productcontroler.postproduct)
/*
Router.post('/product', (req, res, next)=>{
    console.log(req.body)
    res.redirect('/admin/add')
})*/

module.exports=Router;