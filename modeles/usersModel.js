const  mongoose  = require("mongoose") ;



const Users = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
    },
    email:{
        type:String,
        required: [true, "Please provide a email"],
    },
    role:{
        type:String,
        default: 'user'
    },

})
const users =  mongoose.model("users",Users)
module.exports= users
