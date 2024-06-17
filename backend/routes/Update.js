const express = require("express");
const router = express.Router();
const List = require("../model/List.js");

router.post("/updateList/:id",async(req,res)=>{
    const { title, description, status } = req.body;
  const itemId = req.params.id;
  try {
    const updatedItem = await List.findByIdAndUpdate(itemId, { title, description, status }, { new: true });
    res.json(updatedItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
})
module.exports = router;