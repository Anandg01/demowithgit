const path=require('path');

exports.getproduct=(req, res)=>{
    res.sendFile(path.join(__dirname,'../','views','addproduct.html'))
}

exports.postproduct=(req, res, next)=>{
    console.log(req.body)
    res.redirect('/admin/add')
}

