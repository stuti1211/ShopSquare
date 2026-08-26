const jwt = require("jsonwebtoken");

const authMiddleware = (req,res,next)=>{
  const authHeader = req.headers.authorization;
  console.log(authHeader);
  if (!authHeader){
    return res.status(401).json({ message: "Access denied" });
  }

const token = authHeader.split(" ")[1];
console.log("token:",token)
if (!token) {
  return res.status(401).json({ message: "Access denied" });
}
try{
   const decoded = jwt.verify(token, process.env.JWT_SECRET);

   req.user=decoded;
}
catch(error){
    console.log(error.message);
    return res.status(409).json({message:"token not valid"})
}
next();
}

module.exports = authMiddleware;