const path = require('path')
    , express = require('express')
    , upload = require('./lib/middlewares/upload')
    , morgan = require('morgan')
    ;

const app = express(),
    PORT = 8006;

app.use(morgan('common'));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/upload', upload)

app.listen(PORT, () => {
    console.log(`server start on listen ${PORT}`)
});
