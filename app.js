const http=require('http');

const express=require('express')
const app =express();

app.use((req, res, next)=>{
  console.log("1st middlewre ")
 
  next();
})

app.use((req, res, next)=>{
    console.log("2nd middleware")
    res.statusCode=302;
    res.send(`<h1>Hello Express !</h1>`)
})
const server=http.createServer(app);

server.listen(3000, ()=>{
    console.log('Server Running.......')
})