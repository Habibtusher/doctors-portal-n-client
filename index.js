const express = require("express")
const cors = require("cors")
const mongoose = require ("mongoose");
const AvailableAppointmentRoutes = require("./routes/availableRoutes.js")
const BookingRoutes = require("./routes/bookingRoutes.js")
const UsersRoute = require("./routes/userRoutes.js")
const DoctorsRoute = require("./routes/doctorsRoute.js")
const port = process.env.PORT || 5000
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
require("dotenv").config()

app.use("/api", AvailableAppointmentRoutes);
app.use("/api", BookingRoutes);
app.use("/api", UsersRoute);
app.use("/api", DoctorsRoute);

app.get('/', async(req,res)=>{
    res.send("hello")
})
mongoose.set('strictQuery', false);
const connection = async () => {
    try {
      await mongoose.connect(process.env.CONNECTION_URL, {
        useNewUrlParser: true,
      });
    } catch (error) {
      console.log(error);
    }
  };



app.listen(port,()=>{
    connection();
    console.log("running on 5000");
})















