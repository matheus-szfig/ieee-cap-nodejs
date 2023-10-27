const userRouter = require('express').Router();

userRouter.post('/', (req, res) => {
  console.log('user create')
});

userRouter.get('/:id(\\d+)?', (req, res) => {
  if(!!req.params.id){
    res.send('user get');
  }else{
    res.send('user get all')
  }
});

userRouter.put('/:id', (req, res) => {
  console.log('user update');
});

userRouter.delete('/:id', (req, res) => {
  console.log('user delete', req.params.id);
});

module.exports = userRouter;