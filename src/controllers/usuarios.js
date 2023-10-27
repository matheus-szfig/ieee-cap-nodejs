function CreateUsuario ( req, res ) {
  const user = req.body.user;
  const senha = req.body.password;

  res.send({
    status:true
  })

}

function ReadUsuario ( req, res ) {
  

  res.send({
    status:true
  })

}

function LoginUsuario () {
  const user = req.body.user;
  const senha = req.body.password;
}

function UpdateUsuario ( req, res ) {
  const user = req.body.user;
  const senha = req.body.password;

  res.send({
    status:true
  })

}

function DeleteUsuario ( req, res ) {
  const user = req.body.user;
  const senha = req.body.password;

  res.send({
    status:true
  })

}