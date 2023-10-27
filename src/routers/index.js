const userRouter = require('./users');

const Router = require('express').Router;
const router = Router();

router.get('/teste', (req, res) => {
  res.send('hello world');
})

router.use('/users', userRouter);

module.exports = router;