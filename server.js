var http = require('http');
var port = process.env.PORT || 3000;
const fs = require('fs');

function handle_requests(req, res) {
    console.log(`method: ${req.method} and url: ${req.url}`);
    loadAlbumList(cb);
    res.writeHead(200, {
        "Content-Type": "application/json"
    });
    res.end(JSON.stringify({
        error: null
    }) + "\n");
}

function loadAlbumList(cb) {
    fs.readdir("albums", (err, files) => {
        if (err) {
            cb(error, null);
            return;
        }
        cb(null, files);
    })
}

function cb(error, data) {
    if (error) {
        console.log("error");
    }
    else {
        console.log(data.length);
    }
}

var server = http.createServer(handle_requests);
server.listen(port, () => {
    console.log("listening at 3000");
});