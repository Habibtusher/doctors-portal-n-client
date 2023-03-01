const jwt = require("jsonwebtoken");
const userModel = require("../modeles/usersModel");
const AppError = require("./appError");
const VerifyToken = (req, res, next) => {
  const auth_token = req.headers.authorization;

  if (!auth_token) {
    return next(new AppError('unauthorized user',401))
  }

  const token = auth_token.split(" ")[1];

  jwt.verify(token, process.env.ACCESS_TOKEN, function (err, decoded) {
    if (err) {
      return res.status(403).json({
        status: "err",
        message: "forbidden access",
        data: "",
      });
    }
    req.decoded = decoded;
    next();
  });
};
const VerifyAdmin = async (req, res, next) => {
  const auth_token = req.headers.authorization;

  if (!auth_token) {
    return next(new AppError('unauthorized user',401))
    // return res.status(401).json({
    //   status: "err",
    //   message: "unauthorized user",
    //   data: "",
    // });
  }

  const token = auth_token.split(" ")[1];

  jwt.verify(token, process.env.ACCESS_TOKEN, async (err, decoded) => {
    if (err) {
      return res.status(403).json({
        status: "err",
        message: "forbidden access",
        data: "",
      });
    }

    const filter = {
      email: decoded.email,
    };
    const admin = await userModel.find(filter);
    if (admin[0].role !== "admin") {
      return res.status(403).json({
        status: "err",
        message: "forbidden access",
        data: "",
      });
    }
    req.decoded = decoded;
    next();
  });
};

module.exports = { VerifyToken, VerifyAdmin };
