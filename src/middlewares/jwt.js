const jwt = require("jsonwebtoken");

function AuthJWT (req, res, next) {
  try{
    const token = req.body.token;

    if(!token) throw new Error('Invalid token!');

    const auth = jwt.verify(token, process.env.JWT_KEY)
    
    if(!auth) throw new Error('Invalid token')
    
    next();
  }catch(e){
    res.send({
      status:false,
      message:'Invalid token'
    })
  }
}

module.exports = AuthJWT;