const express = require("express");
const {router} = require("./src/routes/api");

const app = new express();  // express js er object

app.use("/api/v1", router)  // api.js er router ta use korse app object

module.exports = app;