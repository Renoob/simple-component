import path from "path";
import express from "express";
import 'colors';
const app = express();
const port = 3000;

const distPath = path.resolve(__dirname, '../dist');
app.use(express.static(distPath));
app.get('*', (_, res) => {
    res.sendFile(`${distPath}/index.html`);
});
app.listen(port, () => console.log(`Express: Listening on port ${port}, open up http://localhost:${port}/ in your broswer!`.green));