const mongoose = require("mongoose");


const userschema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});

const catagoryschema = new mongoose.Schema({
    catagory:{
        type:String,
        required:true,
        unique:true
    }
});

const vendorschema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        // unique:true
    },
    cat:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true
    },
    qnt:{
        type:Number,
        required:true
    },
    img:{
        type:Buffer,
        StringType:String,
    }
});

const register = new mongoose.model("Register",userschema);
// const category = new mongoose.model("Category",catagoryschema);
const Vcatagory = new mongoose.model("vendorCategory",catagoryschema);
const vendor = new mongoose.model("Vendor",vendorschema);

module.exports = {register,Vcatagory,vendor};