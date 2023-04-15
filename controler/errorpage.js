const path=require('path');

exports.errorpage=(req, res)=>{
    res.status(404) .sendFile(path.join(__dirname,'../','views','errorpage.html'))
}