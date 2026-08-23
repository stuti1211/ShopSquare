const bcrypt = require("bcrypt");
const pool = require ("../db/db");

const signup = async (req,res)=>{

    const {name,email,password} =req.body;
    const existingUser = await pool.query(
       " SELECT id from users WHERE email=$1",[email]
    );
     if (existingUser.rows.length > 0);{
      return res.status(401).json({message:"user  already exists"});
     }
    const hashedPassword = await bcrypt.hash(password,10);
    const result = await pool.query(
       "INSERT INTO users (name ,email, password_hash) VALUES ($1,$2 ,$3)",
       [name,email,hashedPassword]
    );
   res.status(201).json({message:"user registered successfully"});

 
};


module.exports = {signup}; 