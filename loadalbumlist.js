var fs = require("fs");

function loadAlbumList(cb) {
    fs.readdir("albums", (err, files) => {
        if (err) {
            cb(error);
            return;
        }
        cb(null, files);
    })
}

exports.loadAlbumList = loadAlbumList;