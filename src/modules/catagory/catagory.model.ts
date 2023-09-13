
import { Schema, model } from "mongoose";

const CatagorySchema = new Schema({
    name : {
        type : String,
        required : true
    },
    image : { type : String },
    description : { type : String }
});

module.exports = model('catagory', CatagorySchema);
