const fs = require('fs')
    , path = require('path')
    , formidable = require('formidable')
    ;

/**
*
* @param {String} name
* @param {File} file
*/
function handleFile(name, file) {
    console.log(name)
    fs.rename(file.path, path.join(uploadDir, file.name), (err) => {
        if (err) return console.log(err)
    })
}

module.exports = function (req, res, next) {
    var form = new formidable.IncomingForm();
    uploadDir = process.env.NODE_ENV === "production" ?
        path.join('/home/drl', 'Videos/upload') : path.join(process.cwd(), 'upload');
    form.uploadDir = uploadDir;
    form.hash = 'md5';

    form.parse(req);

    form.on('file', handleFile);

    form.on('end', () => {
        res.end('ok');
    });

    form.on('error', (err) => {
        console.error(err);
        res.statusCode = 500;
        res.end('error')
    });
}