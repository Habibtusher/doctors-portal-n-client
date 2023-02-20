const express = require("express");
const { getAvailableAppointments,saveAvailableAppointments, getAppointmentsName } = require("../controllers/availableControllers");


const router = express.Router();

router.get('/available-appointment',getAvailableAppointments)
router.post('/post/available-appointment',saveAvailableAppointments)
router.get('/speciality',getAppointmentsName)


module.exports = router;