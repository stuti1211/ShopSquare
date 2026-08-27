const pool = require("../db/db");

const addToCart = async(req,res)=>{
    try{
   const {productId, quantity} =req.body;
   const userId  = req.user.userId;

   const existingItem = await pool.query(
        "SELECT * FROM cart_items WHERE user_id = $1 AND product_id = $2",
        [userId, productId]
    );

   if (existingItem.rows.length >0){
     const updatedQuantity = existingItem.rows[0].quantity +quantity;
        await pool.query(
        "UPDATE cart_items SET quantity = $1 WHERE user_id = $2 AND product_id = $3",
        [updatedQuantity, userId, productId]
     );
     return  res.status(200).json({message :"Product quantity updated "});
    }

   const result = await pool.query (
    "INSERT INTO cart_items (user_id, product_id, quantity) VALUES ($1, $2, $3) RETURNING* ",
    [userId, productId, quantity]
   );
    return res.status(201).json({message:"cart item creatd ",cartItem: result.rows[0]});
}catch(error){
    console.log(error);
    return res.status(500).json({message:"Failed to add product to cart"}); 
}

}
  
const getCart = async (req,res)=>{
try{
   const userId = req.user.userId;
   const result = await pool.query(
  "SELECT * FROM cart_items WHERE user_id = $1",
  [userId]
);
return res.status(200).json({message:" current cart",cart:result.rows});

}catch(error){
   console.log(error);
   return res.status(500).json({message:"not found"});
}
}

module.exports ={addToCart,getCart};