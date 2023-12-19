const express=require('express')
const router=express.Router()

const puppeeter=require("puppeteer")
require("dotenv").config()


router.get("/",async(req,res)=>{
    const userName=req.params.userName || "akashbhandari0101";
    const url=`https://leetcode.com/${userName}/`

    const browser=puppeeter.launch({headless : false});
    try{
        const page=await browser.newPage()
        page.goto(url,{ viewport: { width: 1280, height: 720 }})
        // ...
    }
    catch(e){

    }
})

module.exports = router