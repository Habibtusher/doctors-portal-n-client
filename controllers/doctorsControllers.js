const { ObjectId } = require("mongodb");
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
const getDocotrs = async (req, res) => {
    const query = req.body;
    try {
      const doctors = await doctorsModel.find(query);
      res.status(201).json({
        status: "success",
        message: "Successfully!",
        data: doctors,
      });
    } catch (error) {
      res.send(error);
      //   next(new AppError(error, 400));
    }
  };
const deleteDoctor = async (req, res) => {
  const id = req.params.id
    const query = {
      _id:new ObjectId(id)
    }
    try {
      const doctors = await doctorsModel.deleteOne(query);
      res.status(201).json({
        status: "success",
        message: "Doctor Delete Successfully!",
        data: doctors,
      });
    } catch (error) {
      res.send(error);
      //   next(new AppError(error, 400));
    }
  };
  module.exports = { addDocotrs,getDocotrs,deleteDoctor };