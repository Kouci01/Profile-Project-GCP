const fs = require('fs')
const http = require('http');

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
 
    response.statusCode = 200;
    fs.readFile('index.html',null, (err, data)=>{
        if(err){
            response.statusCode = 404;
            response.write("File is not Found");
        }
        else{
            response.write(data);
        }
        response.end();
    });
};
 
 
const server = http.createServer(requestListener);
 
const port = 8080;
const host = 'localhost';
 
server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});