import './App.css';
import Counter from './components/Counter';
import Form from './components/Form';
import Todo from './components/Todo';

const App = () => {
  return (
    <div className="App">
      <Counter />
      <br></br><hr></hr>
      <Form />
      <br></br><hr></hr>
      <Todo />
    </div>
  );
}

export default App;
