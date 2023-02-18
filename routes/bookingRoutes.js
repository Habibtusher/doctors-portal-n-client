const express = require("express");

const { saveBookings, getBooking } = require("../controllers/bookingController");


const router = express.Router();


router.post('/post/booking',saveBookings)
router.get('/bookings',getBooking)

module.exports = router;