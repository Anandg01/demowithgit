const fs=require('fs');
const { Module } = require('module');


const requestHandler=(req, res)=>{
    const url=req.url;
    const method=req.method;

    
if(url==='/') {
    const text=fs.readFileSync('message.txt','utf-8')
   res.write(`<html>`);
   res.write(`<head><title>Default page</title></head>`)
   res.write(`<body> <h3>${text}</h3><form action="/message" method="POST"><input type="text" name="message"> 
   <button type="submit">SEND</button></form></body>`)
    res.write(`</html>`);
      res.end();
     }
 
 
  else if(url==='/message' && method==='POST')  {
     const body=[];
     req.on('data',(chunk)=>{
         console.log(chunk);
         body.push(chunk);
     })
 
   return req.on('end',()=>{
         const pbody=Buffer.concat(body).toString();
        const message=pbody.split('=')[1];
        console.log(message);
 
         fs.writeFile('message.txt',message, (err)=>{
           res.statusCode=303;
           res.setHeader("Location",'/')
           return res.end();  
         } );
     })
 
     }
}

//module.exports=requestHandler;

 module.exports={
   handler:requestHandler,
   someText:"Routes page added"

 }

