import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
// import Todo from "./components/Todo";
import TodoList from "./components/TodoList";

const App = () => {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  return (
    <div>
      <Header />
      <Form
        todo={todo}
        setTodo={setTodo}
        todoList={todoList}
        setTodoList={setTodoList}
      />
      {/* <Todo /> */}
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
};

export default App;
