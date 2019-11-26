var mongoose  =  require('mongoose');

var userSchema = mongoose.Schema(
{
    code:
    {
        type:String,
        required:true
    },
    phone:
    {
        type:String,
        required:true,
        unique: true  
    },
    loggedInVia:{
        type:String
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    lat:{
        type:String,
        required:false
    },
    long:{
        type:String,
        required:false
    },
    isVerified:{
        type:Boolean,
        required:true
    },
    dob:{
        type:Date,
        required:false
    },
    image:{
        type:String,
        required:false
    }

}

)
var users =  module.exports =  mongoose.model('users',userSchema);