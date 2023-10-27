const verify = require("jsonwebtoken");

function AuthJWT (req, res, next) {
  try{
    const token = req.body.jwt;

    if(!token) throw new Error('Invalid token!');

    const auth = verify(token, process.env.JWT_KEY)

  }catch(e){
    res.send({
      status:false,
      message:e.message
    })
  }
}