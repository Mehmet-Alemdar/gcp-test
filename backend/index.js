const express = require('express')
const user = require('./routes/user')
require('./mongo-connection')
const app = express()

app.use(express.json())
app.use('/user', user)

app.get('/', (req, res) => {
  res.send('Hi')
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})