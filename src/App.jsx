import "./App.css";
import {useState} from "react"


function App(){
  
  const [todos, setTodos] = useState(
    ['Learn React', 'Build a project']
  )
  const [newTodo, setNewTodo] = useState("")
  
  function addNewTodo(){
    setTodos(
      [...todos, newTodo]
    )
    setNewTodo("")
  }

  const deleteTodo = (index) => {
    setTodos(
      todos.filter(
        (_, i) => i !== index
      )
    )
  }

  return(
    <>
      <h3>Todo List</h3>
      <ul>
        {todos.map((todo, index) => 
        <li key={index}> 
          {todo} 
          <button onClick={() => deleteTodo(index)}> Delete </button>
        </li>
        )}
      </ul>
      <p>Typing: {newTodo}</p>
      <input 
        type="text" 
        value={newTodo} 
        placeholder="Enter the new todo"
        onChange={
          (e) => setNewTodo(e.target.value)
        }
      />
      <button onClick={() => addNewTodo()}>
        Add New Task
      </button>
    </>
  )
}

export default App;