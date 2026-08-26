const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const { signup ,login ,getMe } = require("../controllers/authController");


console.log("signup:",signup);
router.post("/signup", signup);
router.post("/login",login);
router.get("/me", authMiddleware, getMe);



module.exports=router;