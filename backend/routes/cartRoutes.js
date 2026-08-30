const express = require("express");
const router = express.Router();

const { addToCart ,getCart,updateCartItem} = require("../controllers/cartController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/updatecart",authMiddleware,addToCart);
router.get("/mycart",authMiddleware,getCart);
router.put("/:productId",authMiddleware,updateCartItem);

module.exports =router;