/*******************
 * Modules
 *******************/
var url = require('url');
var pug = require('pug');
var fs = require('fs');
var jsonfile = require('jsonfile');

/**
 * Requests
 */
exports.getUrlPathname = (request) => {
    let purl = url.parse(request.url, true);
    return purl.pathname;
}

exports.getRequestMethod = (request) => {
    let method = request.method;
    return method;
}

exports.readDatabase = (database, callback) => {
    console.log('about to read it...')
    console.log(database)

    jsonfile.readFile(database, (err, task_list) => {
        console.log('read it...')
        if (!err) {
            console.log('returned it...')
            console.log(task_list)
            callback(task_list);
        }
        console.log('it is empty...')
        return [];
    })
}

/**
 * Responses
 */

//GET
exports.getView = (location, response, data) => {
    console.log('DATA: ' + data);
    response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    if (data != null) //if there's data being passed we pass it to the view
        response.write(pug.renderFile(location, { task_list: data }));
    else //if not we load only the view
        response.write(pug.renderFile(location));
    response.end();
}

exports.getErrorView = (location, response, error) => {
    response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    response.write(pug.renderFile(
        location,
        { error_description: error }
    ));
    response.end();
}

exports.getFavicon = (location, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile(location, (err, data) => {
        if (!err)
            response.write(data);
        else
            response.write('<p>Erro a carregar favicon: ' + err + '</p>');
        response.end();
    })
}

//POST
exports.postTask = (request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write('<script>setTimeout(function () { window.location.href = "http://localhost:7777/"; }, 1000);</script>');
    response.end();
}

