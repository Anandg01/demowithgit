const http=require('http');

const routs=require('./routes');

const server=http.createServer(routs.handler);

console.log(routs.someText);
server.listen(3000, ()=>{
    console.log('Server Running.......')
})