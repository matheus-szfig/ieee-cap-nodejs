const { createUser, getUser, getUserAll, updateUser, deleteUser } = require('../services/users');

const userRouter = require('express').Router();

userRouter.post('/', async (req, res) => {
  try{
  const fields = ['nome', 'email', 'senha'];
  const valid = fields.reduce((acc, f) => (acc && !!req.body[f]), true);

  if(!valid) throw new Error('Solicitação inválida.')

  await createUser(req.body);

  res.send({
    status:true
  })

  }catch(e){
    res.send({
      status:false,
      message:e.message
    })
  }
});

userRouter.get('/:id?', async (req, res) => {
  if(!!req.params.id){
    const user = await getUser(req.params);
    res.send({status:true, data:user});
  }else{
    const users = await getUserAll();
    res.send({status:true, data:users});
  }
});

userRouter.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, email, senha } = req.body;
  try {
    const user = await updateUser(id, email, nome, senha);
    res.send({status:true, data:user});
  }catch(e){
    res.send({
      status:false,
      message:e.message
    })
  }
});

userRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await deleteUser(id);
    res.send({status:true, data:user});
  }catch(e){
    res.send({
      status:false,
      message:e.message
    })
  }
});

module.exports = userRouter;