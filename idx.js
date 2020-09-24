const http = require('http');
const fs = require('fs');

const html = fs.readFileSync('./index.html');

http.createServer((request,response)=>{
  const {url} = request;
  console.log(url);
  response.writeHead(200,{"Content-Type":"text/html"});
  response.write(html);
  response.end();
}).listen(3000,'127.0.0.1',()=> console.log('corriendo') );