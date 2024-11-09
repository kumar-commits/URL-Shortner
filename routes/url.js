const express= require('express');
const { handleGenerateNewShortUrl , HandleAnalytics} = require('../controllers/url');

const router =express.Router();


router.post('/',handleGenerateNewShortUrl)

router.get('/analytics/:shortId',HandleAnalytics)

module.exports=router