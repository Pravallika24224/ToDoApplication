import { useEffect, useState } from 'react'
import axios from 'axios'
import ToDoList from './ToDoList'

const ToDoForm = () => {
  const [formData, setFormData] = useState({})
  const [todos, setTodos] = useState([])

  const handleChange = (e) => {
    e.preventDefault()
    setFormData((formData) => ({ ...formData, [e.target.name]: e.target.value, isDone: false }))
  }
  const clickHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/todo/newTodo', formData)
    .then(res => {
      setTodos([...todos, res?.data?.newTodo])
    })
    setFormData({})
  }
  useEffect(() => {
    axios.get('http://localhost:3000/todo/list')
    .then(res => {
      setTodos(res.data.todoList)
    })
  }, [todos])
  return (
    <div>
      <div className='rounded-lg bg-white text-start p-2 h-fit px-4'>
        <div className="text-4xl font-bold pt-4 pb-2">Todo List</div>
        <div>
          <label
            // for="input"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Title
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            type="text"
            name="title"
            placeholder="Add an item"
            value={formData.title || ""}
            onChange={handleChange}
            required
          />
        </div>
        <button
          onClick={clickHandler}
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none font-medium rounded-md text-sm px-5 py-2.5 me-2 mt-4 mb-2 mx-auto"
          type="submit"
        >Add todo</button>
      </div>
      {todos.length > 0 ?
        <div className='rounded-lg bg-white text-start p-2 mt-4 h-fit px-4'>
          <ToDoList todos={todos}/>
        </div> : ""}
    </div>
  )
}

export default ToDoForm