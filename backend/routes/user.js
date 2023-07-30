const router = require('express').Router();
const User =require('../models/user');
const userService = require('../services/userService');




router.get('/:adress', async (req, res) => {
  const { adress } = req.params

  const users = await userService.getUsersByAdress(adress)
  res.send(users)
})

router.get('/', async (req, res) => {
  const users =  await userService.getUsers()
  res.send(users)
});

router.post('/', (req, res) => {
  const obj = req.body

  const user = new User(obj)
  userService.create(user)
  res.send(user)
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params

  const user = await userService.deleteUserById(id)
  res.send(user)
})

module.exports = router;