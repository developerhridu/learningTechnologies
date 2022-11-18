const express = require('express');
const teacherController = require('../controllers/teachersController');

const helloController = require("../controllers/helloController"); // as we will control routes by express.js so import it
const router = express.Router();  // express.js er router module ta neya hoccee for routing


router.get("/hello-get", helloController.helloGet);  // shift + option + enter
router.post("/hello-post", helloController.helloPost);

// Mongoose
router.post("/insertTeacher", teacherController.insertTeacher);

 module.exports = router;