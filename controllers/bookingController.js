const bookingModal = require("../modeles/bookingModal");

const saveBookings = async (req, res, next) => {
  console.log(bookingModal);
  const booking = req.body;
  const query = {
    appointmentDate: booking.appointmentDate,
    treatment: booking.treatment,
    email: booking.email,
  };
  const alreadyBooked = await bookingModal.find(query);
  try {
    if (alreadyBooked.length) {
      const message = `You have already a booking on ${booking.appointmentDate}`;
      return res.status(201).json({
        status: "error",
        message: message,
        data: [],
      });
    }
    const newBooking = await bookingModal.create(booking);
    res.status(201).json({
      status: "success",
      message: "Booking Confirmed!",
      data: newBooking,
    });
  } catch (error) {
    res.send(error);
    //   next(new AppError(error, 400));
  }
};

const getBooking = async (req, res) => {
  const email = req.query.email;
  const decodeEmail = req.decoded?.email;
  const query = {
    email: email,
  };
  if (decodeEmail != email) {
    return res.status(403).json({
      status: "err",
      message: "forbidden access",
      data: [],
    });
  }
  const bookings = await bookingModal.find(query);
  res.status(201).json({
    status: "success",
    message: "",
    data: bookings,
  });
};

module.exports = { saveBookings, getBooking };
