import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstname : {
        type : String,
        required : true,
        min : 2,
        max : 50
    },
    lastname : {
        type : String,
        required : true,
        min : 2,
        max : 50
    },
    email : {
        type : String,
        required : true,
        unique : true,
        max : 50
    },
    password : {
        type : String,
        required : true,
        max : 50
    },
    picture_path : {
        type : String,
        default : ""
    },
    friends : {
        type : Array,
        default : []
    },
    location : String,
    occupation : String,
    viewedProfile : Number,
    impression : Number,
},{timestamps : true})

const User = mongoose.model("User",UserSchema);

export default User;