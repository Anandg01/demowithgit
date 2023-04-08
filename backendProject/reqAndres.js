const http = require('http');

const server=http.createServer((req, res)=>{
    console.log(req);
const url=req.url;

if(url==='/home'){
    res.write(`<html>`)
   res.write(`<head><title>home page</title></head>`)
   res.write(`<body><h1>Welcome to HOME</h1></body>`)
   res.write(`</html>`)
  return res.end()
}
if(url==='/about'){
    res.write(`<html>`)
   res.write(`<head><title>about page</title></head>`)
   res.write(`<body><h1>Welcome to About Us page</h1></body>`)
   res.write(`</html>`)
  return res.end()
}

if(url==='/node'){
    res.write(`<html>`)
   res.write(`<head><title> my node page</title></head>`)
   res.write(`<body><h1> Welcome to my Node Js project</h1></body>`)
   res.write(`</html>`)
  return res.end()
}

{
   res.write(`<html>`)
   res.write(`<head><title>Custom page</title></head>`)
   res.write(`<body><h1>Welcome to my Node Js project</h1></body>`)
   res.write(`</html>`)
   res.end();
    }
})


server.listen(4000, () => {
    console.log('Server running...');
  });