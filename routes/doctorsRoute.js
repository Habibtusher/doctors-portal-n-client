const express = require("express");
const { addDocotrs } = require("../controllers/doctorsControllers");


const {  VerifyAdmin } = require("../middlewares/verifyUser");



const router = express.Router();


router.post('/add-doctors',VerifyAdmin,addDocotrs)


module.exports = router;