const express = require("express");
const { addDocotrs, getDocotrs, deleteDoctor } = require("../controllers/doctorsControllers");


const {  VerifyAdmin } = require("../middlewares/verifyUser");



const router = express.Router();


router.post('/add-doctors',VerifyAdmin,addDocotrs)
router.get('/doctors',VerifyAdmin,getDocotrs)
router.delete('/delete/doctor/:id',VerifyAdmin,deleteDoctor)


module.exports = router;