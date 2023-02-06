const express = require("express");
const router = express.Router();
const Wine = require("../model/wine");
const winesController = require("../controllers/wines-controller")

router.get("/", winesController.getAllWines);
router.post("/", winesController.addWine);

module.exports = router;