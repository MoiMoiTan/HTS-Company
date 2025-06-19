const express = require('express');
const next = require('next');
const https = require('https');
const fs = require('fs');
const path = require('path');

const port = 443; 
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const https_options = { 
  key: fs.readFileSync('./app/SSL/private.key'),
  cert: fs.readFileSync('./app/SSL/certificate.crt'),
  ca: fs.readFileSync('./app/SSL/ca_bundle.crt')
};

app.prepare().then(() => {
  const server = express();

  server.use(express.static(path.join(__dirname, 'public')));

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  https.createServer(https_options, server).listen(port, () => {
    console.log(`> Ready on https://localhost:${port}`);
  });
});