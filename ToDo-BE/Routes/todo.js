const { Router } = require("express");
const { Todo } = require('../DB/index')

const router = Router()

router.post('/newTodo', async (req, res) => {
  const title = req.body.title
  const isDone = req.body.isDone
  const newTodo = await Todo.create({
    title: title,
    isDone: isDone,
  })
  res.status(200).json({
    message: "Todo item created successfully",
    newTodo: newTodo
  })
})

router.get('/list', async (req, res) => {
  const todoList = await Todo.find({})
  res.status(200).json({
    todoList: todoList
  })
})

router.put('/update/:id', async (req, res) => {
  const todoId = req.params.id
  const updatingItem = await Todo.findById(todoId)
  if (updatingItem) {
    await Todo.updateOne({
      _id: todoId,
    },
      {
        "$set": {
          isDone: req.body.isDone
        }
      })
    return res.status(200).json({
      todoId: todoId,
      message: "Todo item updated successfully"
    })
  }
  else
    return res.status(404).json({ msg: 'Not Found' })
})

router.delete('/delete/:id', async (req, res) => {
  const todoId = req.params.id
  console.log(todoId, typeof(todoId))
  const deletingItem = await Todo.findById(todoId)
  if(deletingItem) {
    await Todo.deleteOne({_id:todoId})
    return res.status(200).json({
      todoId: todoId,
      message: "Todo item deleted successfully"
    })
  }
  else
  return res.status(404).json({ msg: 'Not Found' })
})

module.exports = router;