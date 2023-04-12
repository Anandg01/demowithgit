const http= require('http')
const bodyParser=require('body-parser');


const express=require('express');
const app =express()

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/',(req, res, next)=>{
  next();
})

app.use('/add-product',(req, res, next)=>{
  res.statusCode=302;
  res.send(`<form action="/product" method="POST"><input type="text" name="product_name" placeholder="Product Name">
  <input type="number" name="price" placeholder="Enter Price">
  <button type="submit">Send</button></form>`)
})

app.post('/product',(req, res, next)=>{
  console.log(req.body)
  res.redirect('/add-product')
})

app.use('/',(req, res, next)=>{
  res.send(`<h1>Hello World</h1>`)
})

const server=http.createServer(app);
server.listen(3000, ()=>{
  console.log("Server Running...")
})