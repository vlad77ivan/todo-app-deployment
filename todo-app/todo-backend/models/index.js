const mongoose = require("mongoose")
mongoose.connect("mongodb://todo-mongodb:27017/todo-app", {
  keepAlive: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
mongoose.set("debug", false)
mongoose.Promise = Promise

module.exports.Todo = require("./todo")