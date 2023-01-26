const express = require('express');
const app = express();
require("dotenv").config();
const port = process.env.port;
app.get("/", (req, res) =>{
res.redirect("http://207.180.227.25:1211/baghdad/");
})

app.listen(port);