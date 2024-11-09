const mongoose=require('mongoose')
const path=require('path')
const URLSchema=new mongoose.Schema({

    shortURL:
    {
        type: String,
        unique:true,
        required:true
    },
    redirectUrl:
    {   
        type: String,
        required: true

    },
    visitHistory:
    [
        {
        timestamp:
        {
            type:Number
        }
        }
    ]

},{timestamps:true})


const URL=mongoose.model('url',URLSchema)


module.exports=URL;