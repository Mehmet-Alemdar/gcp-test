const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Hi from user')
});

router.post('/', (req, res) => {
  const { name }  = req.body;
  res.send(`Hi ${name} from user`)
});

module.exports = router;