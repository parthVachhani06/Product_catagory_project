const mongoose = require('../config/db')

const signUPSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
 
    password : {
        type :Number,
        required : false
    },

})

const signUPmodel = mongoose.model("user", signUPSchema);

module.exports = signUPmodel;
