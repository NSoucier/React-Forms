import './Todo.css'

function Todo({ task, remove }) {
    const removeTask = () => {
        remove(task);
    };
    
    return (
        <li>
            {task}
            <button className="remove" onClick={removeTask}>X</button>
        </li>
    )
}

export default Todo;