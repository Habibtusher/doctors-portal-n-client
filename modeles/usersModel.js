const  mongoose  = require("mongoose") ;



const Users = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
    },
    email:{
        type:String,
        required: [true, "Please provide a email"],
    }

})
const users =  mongoose.model("users",Users)
module.exports= users
