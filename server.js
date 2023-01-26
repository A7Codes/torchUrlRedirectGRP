const express = require('express');
const http = require("http");
const app = express();
require("dotenv").config();
const port = process.env.port;

var httpServer = http.createServer(app);

app.get("/", (req, res) =>{
res.redirect("http://207.180.227.25:1211/baghdad/");
});

app.listen(port);
httpServer.listen(80);