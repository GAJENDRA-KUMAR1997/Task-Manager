const express = require("express");
const router = express.Router();
const List = require("../model/List.js");

router.delete("/delete/:id",async(req,res)=>{
    const itemId = req.params.id;
    console.log(itemId);
  try {
    const deletedItem = await List.findByIdAndDelete(itemId);
    if (!deletedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json({ message: 'Item deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
})

module.exports = router;