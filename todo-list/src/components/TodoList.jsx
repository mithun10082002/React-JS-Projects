import React from "react";
import Todo from "./Todo";

const TodoList = ({ todoList, setTodoList }) => {
  return (
    <div>
      {todoList.map((todoItem, index) => (
        <Todo
          todoItem={todoItem}
          todoList={todoList}
          setTodoList={setTodoList}
          key={todoItem.id}
        />
      ))}
    </div>
  );
};

export default TodoList;
