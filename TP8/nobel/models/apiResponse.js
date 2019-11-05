class apiResponse {
    constructor(request, data) {
        this.Request = {
            Request: request.request,
            Message: request.message,
            Status: request.status
        }
        this.Data = data;
    }
}

module.exports = apiResponse;