var http = require('http');
var fs = require('fs');

var myServer = http.createServer(function (req, res) {

    if (req.url == "/") {
        fs.writeFile('test.txt', "Hello assignment", function (error) {

            if (error) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write('file Write Failed');
                res.end();
            }
            else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write('<h1>File Write Success</h1>');
                res.end();
            }

        });
    }
})

myServer.listen(3000);
console.log("Server Run Success");