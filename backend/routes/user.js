const router = require('express').Router();
const User =require('../models/user');
const userService = require('../services/userService');

router.get('/:adress', async (req, res) => {
  const { adress } = req.params

  try {
    const users = await userService.getUsersByAdress(adress)
    res.status(200).send(users)
  } catch (error) {
    res.status(500).send(error)
  }
})

router.get('/', async (req, res) => {
  try {
    const users =  await userService.getUsers()
    res.status(200).send(users)
  } catch (error) {
    res.status(500).send(error)
  }
});

router.post('/', (req, res) => {
  const obj = req.body

  try {
    const user = new User(obj)
    userService.create(user)

    res.status(200).send(user)
  } catch (error) {
    res.status(500).send(error)
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const user = await userService.deleteUserById(id)
    res.status(200).send(user)
  } catch (error) {
    res.status(500).send(error)
  }
})

module.exports = router;