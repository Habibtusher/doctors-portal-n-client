const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const AvailableAppointmentRoutes = require("./routes/availableRoutes.js");
const BookingRoutes = require("./routes/bookingRoutes.js");
const UsersRoute = require("./routes/userRoutes.js");
const DoctorsRoute = require("./routes/doctorsRoute.js");
const PaymentRoute = require("./routes/paymentRoutes.js");
const port = process.env.PORT || 5000;
const app = express();
const stripe = require("stripe")(process.env.STRIPE_SECREC_KEY);
// Middleware
app.use(express.static("public"));
app.use(express.json());
app.use(cors());
app.use(express.json());
require("dotenv").config();

app.use("/api", AvailableAppointmentRoutes);
app.use("/api", BookingRoutes);
app.use("/api", UsersRoute);
app.use("/api", DoctorsRoute);
app.use("/api", PaymentRoute);

app.get("/", async (req, res) => {
  res.send("hello");
});
console.log(process.env.STRIPE_SECREC_KEY);
mongoose.set("strictQuery", false);
const connection = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_URL, {
      useNewUrlParser: true,
    });
  } catch (error) {
    console.log(error);
  }
};

app.post("/create-payment-intent", async (req, res) => {
  const booking = req.body;
  const price = booking.price;
  const amount = price * 100;

  const paymentIntent = await stripe.paymentIntents.create({
    currency: "usd",
    amount: amount,
    payment_method_types: ["card"],
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.listen(port, () => {
  connection();
  console.log("running on 5000");
});
