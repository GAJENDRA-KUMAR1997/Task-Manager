const mongoose = require("mongoose");
const { Schema } = mongoose;

const ListSchema = new Schema({
    title : {
        type : String,
        require : true,
    },
    description : {
        type : String,
        require : true,
    },
    status : {
        type : String,
        require : true,
    },
    createdAt : {
        type : Date,
        default : Date.now
        
    },
    updatedAt : {
        type : Date
    }
})

module.exports = mongoose.model('lists',ListSchema);