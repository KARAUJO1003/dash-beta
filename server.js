const { createServer } = require('https');
const { parse } = require('url');
const { readFileSync } = require('fs');
const next = require('next');
require('dotenv').config();

const endpoint = process.env.ENDPOINT_DASH;
const port = process.env.PORT_DASH;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const httpsOptions = {
  key: readFileSync(process.env.arq_key),
  cert: readFileSync(process.env.arq_cert),
  ca: readFileSync(process.env.arq_ca),
};

app.prepare().then(() => {
  createServer(httpsOptions, (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port, err => {
    if (err) throw err;
    console.log(`> 🚀 AVBDash Ready on ${endpoint}:${port}`);
  });
});
