const userModel = require("../modeles/usersModel");
const jwt = require("jsonwebtoken");
const { ObjectId } = require("mongodb");

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
      const token = jwt.sign({ email }, process.env.ACCESS_TOKEN, {
        expiresIn: "90d",
      });
      res.status(201).json({
        status: "success",
        message: "New User Created!",
        accessToken: token,
      });
    } else {
      res.status(403).json({
        status: "error",
        message: "Unothorized User",
        accessToken: "",
      });
    }
  } catch (error) {
    res.send(error);
    //   next(new AppError(error, 400));
  }
};
const getUser = async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(201).json({
      status: "success",
      message: "success",
      data: users,
    });
  } catch (error) {}
};
const updateUser = async (req, res) => {
  const id = req.params.id;
  
  const filter = {
    _id: new ObjectId(id),
  };
  const options = { upsert: true };
  const updatedDoc = {
    $set: {
      role: "admin",
    },
  };
  try {
    const users = await userModel.updateOne(filter,updatedDoc );
  
    res.status(201).json({
      status: "success",
      message: "make admin successfully!",
      data: users,
    });
  } catch (error) {}
};
const isAdmin = async(req,res)=>{
       const email = req.params.email;
       const filter ={email: email}

       try {
        const user =await userModel.findOne(filter)

        res.status(201).json({
          status: "success",
          message: "make admin successfully!",
          data: user,
          isAdmin: user?.role === "admin"
        });
       } catch (error) {
        console.log(error);
       }
      

}
const deleteUser = async (req, res) => {
  const id = req.params.id
    const query = {
      _id:new ObjectId(id)
    }
    try {
      const user = await userModel.deleteOne(query);
      res.status(201).json({
        status: "success",
        message: "User Delete Successfully!",
        data: user,
      });
    } catch (error) {
      res.send(error);
      //   next(new AppError(error, 400));
    }
  };
module.exports = { createUser, genarateToken, getUser, updateUser,isAdmin,deleteUser };
