const { createUser, getUser, getUserAll } = require('../services/users');

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

userRouter.put('/:id', (req, res) => {
  console.log('user update');
});

userRouter.delete('/:id', (req, res) => {
  console.log('user delete', req.params.id);
});

module.exports = userRouter;