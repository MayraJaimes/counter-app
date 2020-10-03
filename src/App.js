import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{ display: "flex" }}>
      <div>
        <p style={{ textAlign: "center", fontSize: 40 }}>{count}</p>
        <button onClick={increment} style={{ marginRight: 10, fontSize: 20 }}>
          increment
        </button>
        <button onClick={decrement} style={{ marginRight: 10, fontSize: 20 }}>
          decrement
        </button>
        <button onClick={reset} style={{ marginRight: 10, fontSize: 20 }}>
          reset
        </button>
      </div>
    </div>
  );
};

export default App;

//Resources: https://www.youtube.com/watch?v=qgOj3uDGa5I
