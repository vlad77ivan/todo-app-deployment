const mongoose = require("mongoose")
require('dotenv').config()

mongoose.connect('mongodb://todo-mongodb:27017/todo-app?authSource=admin', {
  user: process.env.DB_USER,
  pass: process.env.DB_PASS,
  keepAlive: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
mongoose.set("debug", false)
mongoose.Promise = Promise

module.exports.Todo = require("./todo")