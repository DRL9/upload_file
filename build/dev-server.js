const webpackHotMiddleware = require('webpack-hot-middleware')
    , webpackDevMiddleware = require('webpack-dev-middleware')
    , webpack = require('webpack')
    , express = require('express')
    , opn = require('opn')
    , webpackConfig = require('../webpack.config')
    , upload = require('../lib/middlewares/upload')
    ;

const app = express();
const compiler = webpack(webpackConfig);
const PORT = 8012;
const uri = `http://localhost:${PORT}/upload.html`;

const dev = webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
        colors: true
    },
});

dev.waitUntilValid(() => {
    opn(uri)
});

app.use(dev);


app.use(webpackHotMiddleware(compiler, {
    heartbeat: 5 * 1000,
}));


app.post('/upload', upload);

app.listen(PORT);