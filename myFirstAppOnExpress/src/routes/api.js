const express = require('express');
const helloController = require("../controllers/helloController"); // as we will control routes by express.js so import it
const router = express.Router();  // express.js er router module ta neya hoccee for routing


router.get("/hello-get", helloController.hello);  // shift + option + enter
router.post("/hello-post", helloController.hello);

 module.exports = router;