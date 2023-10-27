const knex = require('knex');
const { createUser, getUser, getUserAll, userLogin } = require('../services/users');

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
  try{
    
  if(!!req.params.id){
    const user = await getUser(req.params);
    res.send({status:true, data:user});
  }else{
    const users = await getUserAll();
    res.send({status:true, data:users});
  }
}catch(e){
  res.send({
    status:false,
    message:e.message
  })
}
});

userRouter.put('/:id', (req, res) => {
  console.log('user update');
});

userRouter.delete('/:id', (req, res) => {
  console.log('user delete', req.params.id);
});

userRouter.post('/login', async (req, res) => {
  try{
    const fields = ['email', 'senha'];
    const valid = fields.reduce((acc, f) => (acc && !!req.body[f]), true);
  
    if(!valid) throw new Error('Solicitação inválida.')

    const token = await userLogin(req.body);
    res.send({
      status:true,
      data:{token}
    })
  }catch(e){
    res.send({
      status:false,
      message:e.message
    })
  }
})

module.exports = userRouter;