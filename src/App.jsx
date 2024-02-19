import { useEffect, useState } from "react"
import Add from "./components/Add"
import List from "./components/List"
import { v4 as uuidv4 } from 'uuid';
import Edit from "./components/Edit";


function App() {
  const [todo,setTodo] = useState([]);
  const [currentTodo, setCurrentTodo] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodoIndex, setCurrentTodoIndex] = useState('');

  const uuid = uuidv4();
  const uniqueId = uuid.slice(0,8);

  useEffect(()=>{
    let gettodos = JSON.parse(window.localStorage.getItem('todo'));
    if(gettodos){
      setTodo(gettodos);
    }else{
      setTodo([]);
    }
  },[])
 
  
  const addTodoHandler=(e)=>{
    e.preventDefault();
    let todoText = currentTodo;
    if(todoText===''){
      return;
    }
    setTodo((pre)=>{
      let updatedTodo = [...todo,{id:uniqueId,todo:todoText}];
      localStorage.setItem("todo", JSON.stringify(updatedTodo));
      return updatedTodo;
    })
    setCurrentTodo('');
  }

  const deleteTodo=(item)=>{
    setTodo((pre)=>{
      let updatedTodo = todo.filter((todo)=>todo.id !== item.id);
      localStorage.setItem("todo",JSON.stringify(updatedTodo));
      return updatedTodo;
    })
  }

  const editTodoHandler=(item)=>{
    setIsEditing(true);
    setCurrentTodo(item.todo);
    setCurrentTodoIndex(item.id);
  }
  const updateTodoHandler=(e)=>{
    e.preventDefault();
    console.log(currentTodo);
    let currentTodoText = currentTodo;
    let updatedTodo = todo.map((item)=>{
      if(item.id === currentTodoIndex){
        item.todo = currentTodoText;
      }
      return item;
    })
    localStorage.setItem("todo",JSON.stringify(updatedTodo));
    setCurrentTodo('');
    setIsEditing(false);
  }

  return (
    <>
      {!isEditing&&(
        <Add addTodoHandler={addTodoHandler} currentTodo={currentTodo} setCurrentTodo={setCurrentTodo}/>
      )}
      {isEditing&&(
        <Edit editTodoHandler={editTodoHandler} updateTodoHandler={updateTodoHandler} currentTodo={currentTodo} setCurrentTodo={setCurrentTodo} setIsEditing={setIsEditing}/>
      )}
      <List allTodos={todo} deleteTodo={deleteTodo} editTodoHandler={editTodoHandler}/>
    </>
  )
}

export default App
