var url = require('url');

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

/*exports.giveResponse() = (statusCode, contentType, data) => {
    
}*/