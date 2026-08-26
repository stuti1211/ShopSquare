const pool = require("../db/db");

const getProducts = async (req,res)=>{

    const result = await pool.query("SELECT * FROM products");
    res.status(200).json(result.rows);
}

const getProductById = async (req,res)=>{
    const  id = req.params.id;

    const result = await pool.query(
        "SELECT * FROM products  WHERE id = $1",
        [id]
    );

    if (result.rows.length===0){
       return res.status(404).json({message:"Product not found"})
    }
    return res.status(200).json(result.rows[0]);
}

const addProduct = async (req,res)=>{

    try{
    const {name,description,price,image,stock}=req.body;
    const result = await pool.query(
        "INSERT INTO products (name, description, price, image, stock) VALUES ($1, $2, $3, $4, $5)",
        [name, description, price, image, stock]
    );
   return  res.status(201).json({message :"Product cretaed  successfully"});
} 
catch(error){
    return res.status(500).json({message:"Failed to create a product"});
}

};



module.exports ={getProducts,getProductById,addProduct};