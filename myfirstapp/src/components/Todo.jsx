import React, { useState } from "react";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [listOfItems, setListOfItems] = useState([]);

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let tempList = listOfItems;
    tempList.push(inputValue);
    setListOfItems(tempList);
    console.log(listOfItems);
    setInputValue("");
  };

  return (
    <div>
      <h1>Todo</h1>
      <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            value={inputValue} 
            onChange={handleInput} 
            placeholder="type here.."
        />
        <button>Add</button>
        {listOfItems.map((item) => (
          <h3 key={item}>{item}</h3>
        ))}
      </form>
    </div>
  );
};

export default Todo;
