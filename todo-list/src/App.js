import React, {useState} from "react";
import './App.css';

const App = () => {
    const [inputValue, setInputValue] = useState('');
    const [listItems, setListItems] = useState([]);

    const handleInput = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit =(e) => {
        e.preventDefault();
        let tempList = listItems;
        tempList.push(inputValue);
        setListItems(tempList);
        console.log(listItems);
        setInputValue("");
    }

  return (
    <div className="container">
      <div className="todo-app">
        <div className="title">
          <h1>Todo App</h1>
        </div>
        <div className="input-field">
          <form onSubmit={handleSubmit} >
            <input type="text" value={inputValue} placeholder="type here..." onChange={handleInput} ></input>
            <button>Add</button>
          </form>
        </div>
        <div className="list-items">
            <ul>
                {listItems.map((item) => (
                    <li key={item} >{item}</li>
                ))}
            </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
