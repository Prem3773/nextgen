// server.mjs
// import { createServer } from 'node:http';
var http = require('http')
var fs=require('fs')
var os = require('os')

console.log(os.platform())
console.log("normal log");
console.warn("danger");
console.assert(true,"transaction Completed");
console.assert(false,"transaction failed");



const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  

  if(req.url === "/"){

    fs.readFile('jsondata.txt',(error,data) => {
        res.end(data);
        res.end();
    })


}
 
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`
