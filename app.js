const http = require('http');
http.createServer((req,res)=>{
res.write("CI/CD Pipeline Working 🚀");
res.write("CI/CD all Working 🚀");
res.write("CI/CD my project Working 🚀")
res.end();
}).listen(3000);
