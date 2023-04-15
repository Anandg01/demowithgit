const path=require('path');
exports.showshop=(req, res)=>{
    res.sendFile(path.join(__dirname,'../','views','shop.html'))
}
