import './App.css'
import ToDoForm from './components/ToDoForm'


function App() {
  return (
    <div className="bg-gray-200 h-screen flex justify-center">
      <div className="flex flex-col justify-center mb-2 w-1/2">
          <ToDoForm/>
      </div>
    </div>
  )
}

export default App
