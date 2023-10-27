const Router = require('express').Router;
const router = Router();

router.get('/teste', (req, res) => {
  res.send(process.env.JWT_KEY);
})

module.exports = router;