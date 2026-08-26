const bcrypt = require("bcrypt");
const pool = require ("../db/db");
const jwt = require("jsonwebtoken");

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

const login = async(req,res)=>{
    const {email,password} = req.body;

    const result = await pool.query(
        "SELECT id,email, password_hash  from users WHERE email =$1",[email]
    );

   if (result.rows.length ===0 ){
    return res.status(409).json({message:"invalid user or password"});
   }

const user = result.rows[0];
const isPasswordValid = await bcrypt.compare(password,user.password_hash);

if(!isPasswordValid){
    return res.status(401).json({message:"password is incorrect "})
}

const token = jwt.sign(
    { userId: user.id },
  process.env.JWT_SECRET,
  { expiresIn: "5h" }
);

return res.status(200).json({message:"login successful",token:token});

}
getMe= async (req,res)=>{
    return res.status(200).json({  user: req.user });

}

module.exports = {signup,login, getMe}; 