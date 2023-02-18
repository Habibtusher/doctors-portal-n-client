const  mongoose  = require("mongoose") ;



const Users = mongoose.Schema({
    paitent: {
        type: String,
        required: [true, "Please provide a name"],
    },
    appointmentDate:{
        type:String,
        required: [true, "Please provide a appointment date"],
    },
    email:{
        type:String,
        required: [true, "Please provide a email"],
    },
    phone:{
        type:String,
        required: [true, "Please provide a phone"],
    },
    slot:{
        type: String,
        required: [true, "Please provide a slot"],
    },
    treatment:{
        type: String,
        required: [true, "Please provide a teatment"],
    }
})
const users =  mongoose.model("users",Users)
module.exports= users
