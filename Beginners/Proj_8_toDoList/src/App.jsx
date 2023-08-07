
import { useState } from 'react'
import './App.css'

function App() {

  const [todos, setTodos] = useState([]);
  const [inputValues, setInputValues] = useState('');

  const [edit, setEdit] = useState(false);
  const [editId, setEditId]= useState(null);
  const [editValue, setEditValue]= useState('');
 
  const addTodo = () =>{

    if(inputValues.trim() !== ''){
        const newTodo = {
          id: new Date().getTime(),
          text: inputValues,
        }
        setTodos([...todos, newTodo])
        setInputValues('')

    }
  }

  const deleteTodo = (id) =>{
    const updateTodo = todos.filter((todo)=> todo.id !== id )
    setTodos(updateTodo)

  }

  const editTodo = (id, text) =>{
    setEdit(true)
    setEditId(id)
    setEditValue(text) 
  }

  const updateTodo = () =>{
    const updateTodos = todos.map((todo)=>{
      if(todo.id === editId){
        return {...todo, text:editValue}
      }
      return todo;
    })
    setTodos(updateTodos)
    setEdit(false)
    setEditId(null)
    setInputValues('')
  }
  
  return (
   <>

    <div className="app">
    <div className="container">
        <h2>ToDO List</h2>
        <input className='input-class' type="text" value={inputValues} onChange={(e) =>setInputValues( e.target.value) }/>

        {
          edit ? (
            <div className='update'>
              <input type="text" value={editValue} onChange={(e)=> setEditValue(e.target.value) } />
              <button onClick={updateTodo}> Update</button>
            </div>
          ) : (
            <button className='btn' onClick={ addTodo }>Add</button>
          )
        }
        
        
       

        <ul>
          {
            todos.map((todo)=>(
              
              <li className='list' key={todo.id}>
              {todo.text} 
              <button className='btn delete' onClick={ ()=> deleteTodo(todo.id) }>Delete</button>
              <button className='btn edit' onClick={ ()=> editTodo(todo.id, todo.text) }>Edit</button>
              </li>
            ))
          }

        </ul>

    </div>
    </div>

   </>
  )
}

export default App
