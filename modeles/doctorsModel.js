const  mongoose  = require("mongoose") ;


const DoctorsSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "name speciality is required"],
    },
    image:{
        type:String,
        required: [true, "image speciality is required"],
    },
    email:{
        type:String,
        required: [true, "email speciality is required"],
    },
    speciality:{
        type:String,
        required: [true, "speciality is required "],
    }
})
const doctor =  mongoose.model("doctor",DoctorsSchema)
module.exports= doctor