const express = require("express");
const router = express.Router();

const  SampleController = require('./controllers/sampleController')

router.get("/", SampleController.test)


module.exports = router;
