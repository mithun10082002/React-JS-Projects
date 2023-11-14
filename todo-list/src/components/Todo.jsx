import style from "../style.module.css";

const Todo = ({ todoItem, todoList, setTodoList }) => {
  const handleDelete = () => {
    setTodoList(todoList.filter((item) => item.id !== todoItem.id));
  };

  return (
    <div>
      <div className={style.display}>
        <h3> {todoItem.name} </h3>
        <button onClick={handleDelete}>Del</button>
      </div>
    </div>
  );
};

export default Todo;
