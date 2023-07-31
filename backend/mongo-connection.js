const mongoose = require('mongoose')

const connectionString = process.env.MONGODB_CONNECTION_STRING || 'mongodb://mongodb/forgg'

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('Connected to MongoDB')
})