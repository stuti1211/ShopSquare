require("dotenv").config();
const express = require("express");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes")
const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart",cartRoutes);

const PORT = 5000;
   
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});