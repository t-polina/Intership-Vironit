const http = require('http');
const fs = require("fs");

const hostname = '127.0.0.1';
const port = 8080;
const text = fs.readFileSync("text.txt", 'utf8');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    let url = req.url;

    if (url === '/hello') {
        res.write('Hello World!');
        res.end();
    }
    else if (url === '/text') {
        res.write(text);
        res.end();
    }
    else if(url.substring(0,5)==='/name'){
        res.write(`Hello ${url.substring(5)}`);
        res.end();
    }
    else{
        res.write('<a href=\'http://127.0.0.1:8080/hello\'>Hello world</a>');
        res.write('<p><a href=\'http://127.0.0.1:8080/text\'>Read txt file</a></p>');
        res.write('<p><a href=\'http://127.0.0.1:8080/name\'>Hello name(add name in url)</a></p>');
        res.end();
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
});
