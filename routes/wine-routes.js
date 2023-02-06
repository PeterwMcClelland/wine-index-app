const express = require("express");
const router = express.Router();
const Wine = require("../model/wine");


router.get("/", async (req, res, next) => {
    // Get all Wines
    let wines;
    try {
wines = await Wine.find();
    } catch (err) {
        console.log(err);
    }

    if(!wines) {
        return res.status(404).json({message: "No Wines Found"})
    }
    return res.status(200).json({ wines });
});

module.exports = router;