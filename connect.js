const mongoose=require('mongoose')
// const URL=require('./models/url')
async function dbConnect(url){
    return mongoose.connect(url)
}

module.exports={dbConnect};