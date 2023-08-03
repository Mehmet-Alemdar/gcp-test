const express = require('express')
const cors = require('cors')
const user = require('./routes/user')
require('./mongo-connection')
const app = express()

app.use(express.json())
app.use(cors())
app.use('/user', user)

app.get('/', (req, res) => {
  res.send('Hi')
})

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log('Server is running on port 5000')
})