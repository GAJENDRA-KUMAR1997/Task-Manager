const express = require("express");
const router = express.Router();
const List = require("../model/List.js");

router.post("/createList",async(req,res)=>{
    try {
        await List.create({
            title : req.body.title,
            description : req.body.description,
            status:req.body.status,
        })
        res.json({success : true});
    } catch (error) {
        console.log(error);
        res.json({success : false});
    }
})

module.exports = router;