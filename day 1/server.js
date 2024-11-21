const http = require('http');

const server = http.createServer((req,res) => {
    console.log("l am server");
});
const port = 3000;
server.listen(port);