const express = require("express");
const router = express.Router();

const { addToCart ,getCart} = require("../controllers/cartController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/updatecart",authMiddleware,addToCart);
router.get("/mycart",authMiddleware,getCart);
module.exports =router;