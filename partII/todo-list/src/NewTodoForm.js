import { useState } from "react";
import Todo from "./Todo";

function NewTodoForm({ addTodo }) {
    const initialState = {newTodo: ""};
    const [ formData, setFormData ] = useState(initialState);

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        addTodo(formData.newTodo)
        setFormData(initialState)
    };
    
    return (
        <>
            <h2>My Todo List!</h2>
            <form className="todoForm" onSubmit={handleSubmit}>
                {/* <label htmlFor="newTodo"></label> */}
                <input
                    id="newTodo"
                    type="text"
                    name="newTodo"
                    placeholder="Add a new task here"
                    value={formData.newTodo}
                    onChange={handleChange}/>
                <button className="addTodo">Add to list</button>
            </form>
        </>
    )
}

export default NewTodoForm;