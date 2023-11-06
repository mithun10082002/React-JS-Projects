import React, { useState } from 'react'

const Counter = () => {

    const [counter, setCounter] = useState(0);

    const increment = () => {
        if (counter > 9){
            alert('counter overlimit');
        } else{
            setCounter(counter + 1);
        }
    }

    const decrement = () => {
        if (counter < 1){
            alert('counter underlimit');
        } else{
            setCounter(counter - 1);
        }
    }

  return (
    <div>
        <h1>Counter</h1>
        <h1> {counter} </h1>
        <button onClick={increment} >Increment +</button>
        <button onClick={decrement} >Decrement -</button>
    </div>
  )
}

export default Counter