const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('./index.html', null, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.write('File not found');
        } else {
            res.write(data);
        }
        res.end();
    });
});

server.listen(port, (error) => {
    if(error){
        console.log('something went wrong', error);
    }else{
        console.log('server is listening on port', port);
    }
});