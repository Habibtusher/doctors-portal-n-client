const  mongoose  = require("mongoose") ;



const AvaiableAppointments = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
    },
    slots:{
        type: Array
    }
})
const avaiableAppointments =  mongoose.model("avaiableAppointments",AvaiableAppointments)
module.exports= avaiableAppointments
