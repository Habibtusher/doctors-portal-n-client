const appointmentModal = require("../modeles/availableAppointment");
const bookingModal = require("../modeles/bookingModal");

const saveAvailableAppointments = async (req, res, next) => {
  const { name, slots } = req.body;

  try {
    const newSlots = await appointmentModal.create({
      name: name,
      slots: slots,
    });
    res.status(201).json({
      status: "success",
      message: "added successfully!",
      data: newSlots,
    });
  } catch (error) {
    //   next(new AppError(error, 400));
  }
};
const getAvailableAppointments = async (req, res, next) => {
  const query = {};
  const date = req.query.date;

  const bookingQuery = { appointmentDate: date };
  try {
    const data = await appointmentModal.find(query);
    const alreadyBooked = await bookingModal.find(bookingQuery);

    data.forEach((option) => {
      const optionBooked = alreadyBooked.filter(
        (book) => book.treatment === option.name
      );
      const bookedSlots = optionBooked?.map((book) => book.slot);
      const remainingSlots = option.slots.filter(
        (slot) => !bookedSlots.includes(slot)
      );
      option.slots = remainingSlots;
      
    });

    res.status(200).json({
      status: "success",
      results: data.length,
      data: data ? data : [],
    });
  } catch (error) {
    //   next(new AppError(error));
  }
};

module.exports = { getAvailableAppointments, saveAvailableAppointments };
