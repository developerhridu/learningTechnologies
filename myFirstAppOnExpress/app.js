const express = require("express");
const router = require("./src/routes/api");

const app = new express();  // express js er object

// all security middleware must be configured before routing
// import
 const rateLimit = require('express-rate-limit');
 const helmet = require('helmet');
 const mongoSanitizer = require('express-mongo-sanitize');
 const xss = require('xss-clean');
 const hpp = require('hpp');
 const cors = require('cors');

 // security middleware Implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitizer());
app.use(xss());
app.use(hpp());

// request express-rate-limit for limiting request from a single user to prevent DOS Attack
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
app.use(limiter);


app.use("/api/v1", router)  // api.js er router ta use korse app object


// undefined route
app.use('*', (req, res) => {
    res.status(404).json({status: 'Failed to find route', Data: 'Not Found'});
})

module.exports = app;