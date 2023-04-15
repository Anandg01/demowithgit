const express=require('express');
const Router=express.Router()
const path=require('path')
Router.get('/contactus',(req, res)=>{
    res.sendFile(path.join(__dirname,'../','views','contacts.html'))
})
Router.post("/success",(req, res)=>{
    res.sendFile(path.join(__dirname,"../",'views','succes.html'))
})

module.exports=Router;