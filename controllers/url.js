
const shortid=require('shortid')
const URL=require('../models/url.js')
// const path=require('path')
async function handleGenerateNewShortUrl(req,res){
    const body=req.body;
    if(!body.url)return res.status(401).json({err:'url is req'})
    let shortID=shortid.generate();
     // Ensure the generated short ID is unique
     let existingUrl = await URL.findOne({ shortURL: shortID });
     while (existingUrl) {
         shortID = shortid.generate();
         existingUrl = await URL.findOne({ shortURL: shortID });
     }

    await URL.create({
        shortURL:shortID,
        redirectUrl:body.url,
        visitHistory:[]
    })

    return res.json({
        id:shortID
    })
}

async function HandleAnalytics(req,res){

    const shortId=req.params.shortId;
    const result=await URL.findOne({shortid});

    return res.json({
        toalclicks: result.visitHistory.length,
        analytics:result.visitHistory,
    })

}


module.exports={
    handleGenerateNewShortUrl,HandleAnalytics
}