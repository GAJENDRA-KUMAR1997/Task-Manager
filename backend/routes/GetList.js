const express = require("express");
const router = express.Router();
const List = require("../model/List.js");

router.get("/getList",async(req,res)=>{
    try {
        const data = await List.find({});
        res.json(data);
    } catch (error) {
        console.log(error)
        res.status(400).json({success:false});
    }
})

module.exports = router;