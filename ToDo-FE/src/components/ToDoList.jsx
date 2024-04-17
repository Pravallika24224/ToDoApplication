import React from 'react'
import axios from 'axios'

const ToDoList = ({ todos }) => {

  const handleChange = (todo, index) => (e) => {
    axios.put(`http://localhost:3000/todo/update/${todo._id}`, { isDone: e.target.checked })
      .then(res => {
        console.log(res, "update res")
      })
    // let newArr = [...todos]
    // newArr[index].isDone = e.target.checked
    // setTodos(newArr)
  }

  const handleDelete = (todo) => {
    axios.delete(`http://localhost:3000/todo/delete/${todo._id}`)
      .then(res => {
        console.log(res)
      })
  }
  return (
    <div>
      {todos?.map((todo, index) => {
        return (
          <div key={todo.id} className="flex flex-row bg-slate-200 h-14 items-center mb-2">
            <input type="checkbox" id={todo.id} checked={todo.isDone} value={todo.title} onChange={handleChange(todo, index)} className="w-1/12 h-1/2" />
            <div className="flex-none w-10/12">
              {todo.isDone === true ?
                <p className='text-lg line-through font-semibold decoration-red-600 decoration-2'>{todo.title}</p> :
                <p className='text-lg font-semibold'>{todo.title}</p>}
            </div>
            <div className="flex-none w-1/12">
              <svg onClick={() => handleDelete(todo)} className="h-8 w-8 text-zinc-700 cursor-pointer" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="10" y1="11" x2="10" y2="17" />
                <line x1="14" y1="11" x2="14" y2="17" />
                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
              </svg>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ToDoList