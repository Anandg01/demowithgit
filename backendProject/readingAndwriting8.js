const http=require("http")
const fs=require('fs');

const server =http.createServer((req, res)=>{
    const url=req.url;
    const method=req.method;
   console.log(url,method);

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
})

server.listen(3000, ()=>{
    console.log('server running')
})