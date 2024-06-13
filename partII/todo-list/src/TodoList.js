import { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import './TodoList.css'

function TodoList() {
    const [ todos, setTodos ] = useState(["Make my first todo"]);

    const addTodo = (item) => {
        setTodos([...todos, item]);
    };

    const remove = (item) => {
        setTodos(todos.filter(todo => todo !== item));
    };

    return (
        <>
            <NewTodoForm addTodo={addTodo}/>
            <ul>
                {todos.map( (task, id) => (<Todo task={task} key={id} remove={remove}/>))}
            </ul>
            
        </>
    )
}

export default TodoList;