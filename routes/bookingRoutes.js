const express = require("express");

const { saveBookings, getBooking, getBookingById } = require("../controllers/bookingController");
const { VerifyToken } = require("../middlewares/verifyUser");



const router = express.Router();


router.post('/post/booking',saveBookings)
router.get('/bookings',VerifyToken,getBooking)
router.get('/booking/:id',VerifyToken,getBookingById)

module.exports = router;