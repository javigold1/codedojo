import React, {useState} from 'react';

const Todo = (props) => {
    const { todoList, setTodoList } = props;
    const [newTodo, setNewTodo] =useState("")

    const todoItem = {
        text: newTodo,
        complete: false
    }
    const submitHandler = (e) => {
        e.preventDefault();
        setTodoList([...todoList, todoItem]);
        setNewTodo("");
    };
    const deleteHandler = () => {
        const filteredTodos = todoList.filter((todo) => todo.complete === false);
        setTodoList(filteredTodos);
    }
    const completeHandler = (todo) => {
        todo.complete = !todo.complete;
        // let updatedTodos = [...todoList];
        setTodoList([...todoList]) ;

    }
return(
    <div>
        <form onSubmit = {submitHandler} >
            <p>
            <label htmlFor="todoList">Todo List: </label>
            <input value = { newTodo } name = "newTodo" onChange={(e) =>{
                setNewTodo(e.target.value)}} type="text"/>
            </p>
            <button> Add </button>
        </form>
        <div style ={{display: "flex", flexDirection: "column"}}>
        {
            todoList.map((newTodo, index) => (
                <p key={index}>{newTodo.text} 
                <input  onClick={(e)=> {
                    completeHandler(newTodo);
                }} checked={newTodo.complete} type="checkbox" />
                <button onClick={(e) => {
                    deleteHandler();
                }}
                >Delete</button>
                </p> 
            ))
            }
        
        </div> 
    </div>
)}
        
export default Todo;