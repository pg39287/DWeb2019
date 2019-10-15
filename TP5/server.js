/*******************
 * Modules
 *******************/
var http = require('http');
var pug = require('pug');
var fs = require('fs');
var jsonfile = require('jsonfile');
var { parse } = require('querystring');

var utilities = require('./utilities');

/*******************
 * Config Variables
 *******************/
var CONFIG_FILE = 'serverConfig.json';
//
var DATABASE;
var PORT = '7777';

var server = http.createServer((request, response) => {
    let url = utilities.getUrlPathname(request);
    console.log(url);
    let method = utilities.getRequestMethod(request);

    switch (method) {
        case "GET": //process GET requests
            //index
            if (url == '/') {
                console.log('Fell in index.html');
                response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
                response.write(pug.renderFile('./www/index.pug'));
                response.end();
                return;
            }
            //favicon
            if (url == 'favicon.ico') {
                console.log('Fell in favicon request');
                response.writeHead(200, { 'Content-Type': 'text/html' });
                fs.readFile('./www/images/favicon.ico', (err, data) => {
                    if (!err)
                        response.write(data);
                    else
                        response.write('<p>Erro a carregar favicon: ' + err + '</p>');
                    response.end();
                })
                return;
            }
            //index
            break;
        case "POST": //process POST request
            //task
            break;
        default: //process the other request types for errors
            utilities.giveResponse(200, 'text/html')
            break;
    }

});

server.listen(PORT);
console.log('Server running on port: ' + PORT + '...');
