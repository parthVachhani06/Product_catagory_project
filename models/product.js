const mongoose = require('../config/db')
const productScema =  new mongoose.Schema({
    Product_name: String ,
    rate : Number,
    catagory : String,
    price : Number,
    proimages : String
})

const productModel =  mongoose.model ("myproduct", productScema);

module.exports = productModel;



