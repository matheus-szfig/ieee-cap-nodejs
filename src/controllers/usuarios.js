function Login ( req, res ) {
  const user = req.body.user;
  const senha = req.body.password;

  res.send({
    status:true
  })

}