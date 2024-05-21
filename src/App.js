
import './App.css';
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import React, { useState } from 'react'

const initialTodo = {
  name: '',
  description: '',
  status: 'Not completed',
};

// const [todos, setTodos] = useState([{
//   name:"Name:OfficeTask-1",
//   description:"This is the description of my first task",
//   status:"Not completed",
//  },
//  {
//   name:"Name:OfficeTask-2",
//   description:"This is the description of my second task",
//   status:"Completed",
//  },
//  {
//   name:"Name:OfficeTask-3",
//   description:"This is the description of my third task",
//   status:"Not Completed",
  
//  }])
function App() {
  const [todos, setTodos] = useState([{
    name:"Name:OfficeTask-1",
    description:"This is the description of my first task",
    status:"Not completed",
   },
   {
    name:"Name:OfficeTask-2",
    description:"This is the description of my second task",
    status:"Not Completed",
   },
   {
    name:"Name:OfficeTask-3",
    description:"This is the description of my third task",
    status:"Not Completed",
    
   }])
  const [newTodo, setNewTodo] = useState(initialTodo)
  const addTodo = () => {
    setTodos([...todos, newTodo]);
    setNewTodo(initialTodo)
  };

    const editTodo =(index) => {
      const editedName = prompt('Enter edited task name:', todos[index].name);
      const editedDescription = prompt('Enter edited description:', todos[index].description);
  
      const updatedTodos = [...todos];
      updatedTodos[index] = {
        ...updatedTodos[index],
        name: editedName,
        description: editedDescription,
      };
  
      setTodos(updatedTodos);
    };
    const deleteTodo = (index) => {
      const updatedTodos = todos.filter((_, i) => i !== index);
      setTodos(updatedTodos);
    };
  
  return (
    <div className="App">
      <div className="container">
      <h5>My Todo</h5>
        <div className="input">
    
   <span> <input type="text" placeholder="Todo Name" value={newTodo.name} onChange={(e) => setNewTodo({ ...newTodo, name: e.target.value })}/></span>
  <span>  <input type="text" placeholder="Todo Description" value={newTodo.description} onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}/></span>
 <Button variant="contained" size="small" color="success"  onClick={addTodo}>Add Todo</Button><br/></div>
 <div className="heading">
<span className="mytodo">MyTodos</span>
<span className="statuss">Status: <Button variant="contained" size="small" color="success"><ArrowDropDownIcon />All</Button></span>
<br/><br/></div>
<div className="map">
{todos.map((carddisplay,index)=>(
<Card1 key={index} cards={carddisplay} edit={() => editTodo(index)} delete={() => deleteTodo(index)}/>))}
  </div> 
    </div>
    </div>
  );
}
function Card1 ({cards,edit ,delete:deleteTodo }){
  return(
    <div className="card" style={{width: "19rem"}} >
  {/* <img src="..." class="card-img-top" alt="..."/> */}
  <div className="card-body">
    <p className="card-title">{cards.name}</p>
    <p className="card-text">{cards.description}</p>
    <span className="status">Status: <Button variant="contained" size="small"><ArrowDropDownIcon />{cards.status}</Button></span><br/><br/>
    <Button variant="contained" size="small" color="success" onClick={edit} >Edit</Button>
    <Button variant="contained" size="small" color="error" onClick={deleteTodo}>Delete</Button>
  </div>
</div>
  )
}
export default App;