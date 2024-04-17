const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://pravallika:Pravallika%4010@cluster0.kxj574s.mongodb.net/todo-app")

const TodoSchema = new mongoose.Schema({
  title: String,
  isDone: Boolean
})

const Todo = mongoose.model('Todo', TodoSchema)

module.exports = {
  Todo
}