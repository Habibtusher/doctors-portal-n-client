const userModel = require("../modeles/usersModel");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
  const user = req.body;
  try {
    const newUser = await userModel.create(user);
    res.status(201).json({
      status: "success",
      message: "New User Created!",
      data: newUser,
    });
  } catch (error) {
    res.send(error);
    //   next(new AppError(error, 400));
  }
};
const genarateToken = async (req, res) => {
  const email = req.query.email;
  const query = {
    email: email,
  };
  try {
    const user = await userModel.findOne(query);
    if (user) {
      const token = jwt.sign({email},process.env.ACCESS_TOKEN, {expiresIn:"1h"})
      res.status(201).json({
        status: "success",
        message: "New User Created!",
        accessToken: token,
      });
    }
    else{
      res.status(403).json({
        status: "error",
        message: "Unothorized User",
        accessToken: '',
      });
    }
   
  } catch (error) {
    res.send(error);
    //   next(new AppError(error, 400));
  }
};
module.exports = { createUser, genarateToken };
