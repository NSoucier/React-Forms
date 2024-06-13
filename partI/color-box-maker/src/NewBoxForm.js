import React, { useState } from "react";
import './NewBoxForm.css'

function NewBoxForm({ addbox }) {
    const initialState = {
        backgroundColor: "",
        width: "",
        height: ""
    };
    
    const [ formData, setFormData ] = useState(initialState);
    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    }
    const handleSubmit = evt => {
        evt.preventDefault()
        const { backgroundColor, width, height } = formData;
        // action
        addbox(backgroundColor, width, height);
        setFormData(initialState)
    };

    return (
        <div className="form">
            <h3>Design your box below!</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="backgroundColor">Color:
                    <input 
                        id="backgroundColor"
                        type="text"
                        name="backgroundColor"
                        placeholder=" color"
                        minLength={3}
                        value={formData.backgroundColor}
                        onChange={handleChange}/>
                </label>

                <label htmlFor="width">Width: 
                    <input 
                        id="width"
                        type="number"
                        name="width"
                        placeholder=" width"
                        min={40}
                        value={formData.width}
                        onChange={handleChange}/>
                </label>
                
                <label htmlFor="height">Height: 
                    <input 
                        id="height"
                        type="number"
                        name="height"
                        placeholder=" height"
                        min={40}
                        value={formData.height}
                        onChange={handleChange}/>  
                </label>
                <button>Add box!</button>
            </form>
        </div>
    )
}

export default NewBoxForm;