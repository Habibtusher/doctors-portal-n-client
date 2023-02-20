const express = require("express");

const { saveBookings, getBooking } = require("../controllers/bookingController");
const { VerifyToken } = require("../middlewares/verifyUser");



const router = express.Router();


router.post('/post/booking',saveBookings)
router.get('/bookings',VerifyToken,getBooking)

module.exports = router;