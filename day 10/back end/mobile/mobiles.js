const  mongoose = require('mongoose');

const mobileSchema = new mongoose.Schema(
    {
    Mobilename: String,
    Brand: String,
    Price: Number,
    Rating: Number,
    // image: String 
    }
);


const mobile = mongoose.model('Mobiledata', mobileSchema);
module.exports = mobile;