/*******************
 * Modules
 *******************/
var http = require('http');
var jsonfile = require('jsonfile');
var { parse } = require('querystring');

var utilities = require('./utilities');

/*******************
 * Config Variables
 *******************/
var CONFIG_FILE = 'serverConfig.json';
var SERVER_CONFIGURATION = jsonfile.readFileSync(CONFIG_FILE); //readFileSync is important to read the file before creating the server
console.log('-- Server running --\n'
    + 'Port: ' + SERVER_CONFIGURATION.port + '\n'
    + 'Database: ' + SERVER_CONFIGURATION.database + '\n'
    + 'Favicon: ' + SERVER_CONFIGURATION.favicon);

var server = http.createServer((request, response) => {

    let url = utilities.getUrlPathname(request);
    console.log(url);
    let method = utilities.getRequestMethod(request);

    switch (method) {
        case "GET": //process GET requests
            //index
            if (url == '/') {
                console.log('Fell in index.html');
                utilities.getView('./www/index.pug', response);
                return;
            }
            //favicon
            if (url == '/favicon.ico') {
                console.log('Fell in favicon request');
                utilities.getFavicon(SERVER_CONFIGURATION.favicon, response);
                return;
            }
            // error pages outside of the avaialable views
            utilities.getErrorView('./www/error.pug', response, '404 Not found...');
            console.log('Fell in 404 view')
            break;
        case "POST": //process POST request
            //task
            if (url == '/task') {
                utilities.postTask(request, response);
            }
            //$('#myModal').modal('hide')
            break;
        default: //process the other request types for errors
            utilities.getView('./www/error.pug', response);
            break;
    }
});
server.listen(SERVER_CONFIGURATION.port);
