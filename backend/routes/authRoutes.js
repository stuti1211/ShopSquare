const express = require("express");
const router = express.Router();
const { signup } = require("../controllers/authController");
const { login } = require("../controllers/authController")

console.log("signup:",signup);
router.post("/signup", signup);
router.post("/login",login)



module.exports=router;