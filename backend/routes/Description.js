const express = require("express");
const router = express.Router();
const List = require("../model/List.js");

router.get("/description/:id",async(req,res)=>{
    const _id = req.params.id;
    console.log(_id)
    try {
        const data = await List.findById(_id);
        res.json(data);
    } catch (error) {
        console.log(error)
        res.status(400).json({success:false});
    }
})

module.exports = router;