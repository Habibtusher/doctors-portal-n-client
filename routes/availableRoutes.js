const express = require("express");
const { getAvailableAppointments,saveAvailableAppointments } = require("../controllers/availableControllers");


const router = express.Router();

router.get('/available-appointment',getAvailableAppointments)
router.post('/post/available-appointment',saveAvailableAppointments)

module.exports = router;