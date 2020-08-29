import React, { useState } from "react";
import Message from "./message";

function Counter() {
  let [counter, setCounter] = useState(1);
  return (
    <div className="App">
      <h1>Counter for using functional class and useState</h1>
      <Message counterValue={counter} />
      <button className="btn-margin btn" onClick={() => setCounter(++counter)}>
        Update Counter
      </button>
      <br />
      <button className="btn-margin btn" onClick={() => setCounter(--counter)}>
        Decrease Counter
      </button>
      <br />
      <button className="btn-margin btn" onClick={() => setCounter(0)}>
        Reset Counter
      </button>
    </div>
  );
}

export default Counter;
