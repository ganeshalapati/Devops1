const http = require('http');
http.createServer((req,res)=>{
res.write("CI/CD Pipeline Working 🚀");
res.write("CI/CD all Working 🚀");
res.end();
}).listen(3000);
