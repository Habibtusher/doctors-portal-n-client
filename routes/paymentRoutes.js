const express = require("express");
const { addPayments } = require("../controllers/paymentsControllers");

const {  VerifyToken } = require("../middlewares/verifyUser");



const router = express.Router();


router.post('/add-payment',VerifyToken,addPayments)



module.exports = router;