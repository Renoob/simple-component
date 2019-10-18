import path from "path";
import MemoryFileSystem  from "memory-fs";
import webpack from "webpack";
import webpackDevConfig from "../build/webpack.config.dev";
import ReactDomServer from "react-dom/server";
import express from "express";
import 'colors';

const app = express();
const port = 3000;
const mfs = new MemoryFileSystem();
const Module = module.constructor;
const devMode = process.env.NODE_ENV === "development";

if (devMode) {
    const compiler = webpack(webpackDevConfig);
    compiler.outputFileSystem = mfs;
    compiler.watch({}, (err) => {
        if (err) throw err;

        const bundlePath = path.join (
            webpackDevConfig.output.path,
            webpackDevConfig.output.filename
        )
        const bundle = mfs.readFileSync(bundlePath, 'utf-8');
        const m = new Module();
        m._compile(bundle, 'server-entry.js');
        const serverBundle = m.exports.default;
        app.get('*', (req, res) => {
            const appString = ReactDomServer.renderToString(serverBundle);
            const template = mfs.readFileSync(path.resolve(__dirname, "../dist/index.html"), 'utf-8');
            res.send(template.replace('<!--app-->', appString));
        });
    });  
} else {
    const distPath = path.resolve(__dirname, "../dist");
    app.use(express.static(distPath));
    app.get('*', (_, res) => {
        res.sendFile(`${distPath}/index.html`);
    });
}

app.listen(port, () => console.log(`Express: Listening on port ${port}, open up http://localhost:${port}/ in your broswer!`.green));