import React from 'react'

const ToDoList = ({ todos, setTodos }) => {

  const handleChange = (index) => (e) => {
    let newArr = [...todos]
    newArr[index].isDone = e.target.checked
    setTodos(newArr)
  }
  return (
    <div>
      {todos?.map((todo, index) => {
        return (
          <div key={todo.id} className="flex flex-row bg-slate-200 h-14 items-center mb-2">
            <div className='flex flex-row w-4/5'>
              <input type="checkbox" id={todo.id} checked={todo.isDone} value={todo.title} onChange={handleChange(index)} className="flex-none w-1/5" />
              <div className="flex-none w-4/5">
                <p>{todo.title}</p>
              </div>
            </div>
            <div className='flex flex-row w-1/5'>
              <div className="flex-none justify-self-end w-1/2">
                <svg className="h-8 w-8 text-zinc-700" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />  <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />  <line x1="16" y1="5" x2="19" y2="8" /></svg>
              </div>
              <div className="flex-none w-1/2">
                <svg className="h-8 w-8 text-zinc-700" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="4" y1="7" x2="20" y2="7" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" />  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ToDoList