var http = require('http');
var port = process.env.PORT || 3000;

function handle_requests(req, res) {
    console.log(`method: ${req.method} and url: ${req.url}`);
    res.writeHead(200, {
        "Content-Type": "application/json"
    });
    res.end(JSON.stringify({
        error: null
    }) + "\n");
}

var server = http.createServer(handle_requests);
server.listen(port, () => {
    console.log("listening at 3000");
});