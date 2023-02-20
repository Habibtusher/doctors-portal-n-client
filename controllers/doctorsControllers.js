const doctorsModel = require("../modeles/doctorsModel")


const addDocotrs = async (req, res) => {
    const doctor = req.body;
    try {
      const newDoctor = await doctorsModel.create(doctor);
      res.status(201).json({
        status: "success",
        message: "New Doctor Added Successfully!",
        data: newDoctor,
      });
    } catch (error) {
      res.send(error);
      //   next(new AppError(error, 400));
    }
  };
  module.exports = { addDocotrs };