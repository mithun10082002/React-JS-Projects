import React, { useState } from "react";

const Form = () => {
    const [inputValue, setInputValue] = useState("");

    const handleInput = (event) => {
        setInputValue(event.target.value)
        // console.log(inputValue)
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(inputValue);
        setInputValue("");
    }

    return(
        <div>
            <h1>Form</h1>
            <form onSubmit={handleSubmit} >
                <input type="text" value={inputValue} onChange={handleInput} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form