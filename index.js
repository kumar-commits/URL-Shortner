const express=require('express');
const urlRoute=require('./routes/url')
const {dbConnect}=require('./connect')
const PORT=8000
const app=express();
const URL=require('./models/url')

console.log("dbConnect imported:", dbConnect);

dbConnect("mongodb://127.0.0.1:27017/shorter-url").then(() => {
    console.log("DB_CONNECTED")
}).catch((err) => {
    console.log("error please check",err)
});
app.use(express.json())
app.use('/url',urlRoute)

// app.get('/:shorId',async(req,res)=>{
//     const shorId=req.params.shorId;
//     const entry=await URL.findOneAndUpdate
//     ({
//        shorId  
//     },{$push:{
//         visitHistory:{
//             timestamp:Date.now()
//         }
//     }})
//     res.redirect(entry.redirectUrl)
// })

app.get('/:shortId', async (req, res) => {
    const shorId = req.params.shorId;
     {
        const entry = await URL.findOneAndUpdate(
            { shorId },
            {
                $push: {
                    visitHistory: {
                        timestamp: Date.now()
                    }
                }
            },
            // { new: true } // This option returns the updated document
        );

            console.log(entry);
            res.redirect(entry.redirectUrl);
    }
        
}
);









app.listen(PORT,()=>{
    console.log(`app listening on ${PORT}`)
})