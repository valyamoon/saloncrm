var mongoose  =  require('mongoose');

var salonSchema = mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    lat:{
        type:String,
        required:true
    },
    long:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    services:{
        type:Array,
        required:false
    },
    image:{ data: Buffer, 
        contentType: String
    }

})

var salonsData =  module.exports =  mongoose.model('salonsData',salonSchema);