const path = require('path')
    , express = require('express')
    , favicon = require('serve-favicon')
    , morgan = require('morgan')
    , upload = require('./lib/middlewares/upload')
    ;

const app = express(),
    PORT = 8006;

const logger = morgan('dev')

app.use(favicon('./favicon.ico'))
app.use(logger);
app.use(express.static(path.join(__dirname, 'dist')));

app.post('/upload', upload)

app.listen(PORT, () => {
    console.log(`server start on listen ${PORT}`)
    console.log(`NODE_ENV = ${process.env.NODE_ENV}`)
});
