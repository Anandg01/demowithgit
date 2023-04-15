const express=require('express');
const path=require('path');

const router=express.Router();
const shopprob=require('../controler/shop');
/*
router.get('/',(req, res, next)=>{
   res.sendFile(path.join(__dirname,'../','views','shop.html'))
})
*/

router.get('/',shopprob.showshop)
module.exports=router;