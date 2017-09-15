const path = require('path')
    , express = require('express')
    , morgan = require('morgan')
    , upload = require('./lib/middlewares/upload')
    ;

const app = express(),
    PORT = 8006;

const logger = morgan('dev')

app.use(logger);
app.use(express.static(path.join(__dirname, 'dist')));

app.post('/upload', upload)

app.listen(PORT, () => {
    console.log(`server start on listen ${PORT}`)
});
