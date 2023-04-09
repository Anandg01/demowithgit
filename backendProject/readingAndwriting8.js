const http=require("http")
const fs=require('fs');

const server =http.createServer((req, res)=>{
    const url=req.url;
    const method=req.method;
   
    {
   const text=fs.readFileSync('message.txt','utf-8')
   console.log(text);
  res.write(`<html>`);
  res.write(`<head><title>Default page</title></head>`)
  res.write(`<body> <p>${text}</p><form action="/message" method="POST"><input type="text" name="message">
   <button type="submit">SEND</button></form></body>`)
   res.write(`</html>`);
     res.end();
    }


  if(method==='POST')  {
    const body=[];
    req.on('data',(chunk)=>{
        console.log(chunk);
        body.push(chunk);
    })

    req.on('end',()=>{
        const pbody=Buffer.concat(body).toString();
       const message=pbody.split('=')[1];
       console.log(message);
        fs.writeFileSync('message.txt',message);
        res.statusCode=303;
    })
    return res.end();  
    }
})

server.listen(3000, ()=>{
    console.log('server running')
})