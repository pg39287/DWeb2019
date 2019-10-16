/*******************
 * Modules
 *******************/
var url = require('url');
var pug = require('pug');
var fs = require('fs');

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

/**
 * Responses
 */

exports.getView = (location, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
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

exports.postTask = (request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write('<script>setTimeout(function () { window.location.href = "http://localhost:7777/"; }, 1000);</script>');
    response.end();
}

