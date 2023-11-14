import React from "react";
import style from "../style.module.css";
import shortid from "shortid";

const Form = ({ todo, setTodo, todoList, setTodoList }) => {
  const handleInput = (e) => {
    setTodo(e.target.value);
    // console.log(todo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    todo === ""
      ? alert("Input Field is Empty...")
      : setTodoList([...todoList, { name: todo, id: shortid.generate() }]);
    // console.log(todoList)
    setTodo("");
  };

  return (
    <div>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="type here..."
          value={todo}
          onChange={handleInput}
        ></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Form;
