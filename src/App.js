import "./App.css";
import Increment from "./components/Increment";
import Decrement from "./components/Decrement";
import Reset from "./components/Reset";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <div className="container">
        <Decrement
          buttonStyle="decrement"
          counter={counter}
          setCounter={setCounter}
        />
        <div className="counter">{counter}</div>
        <Increment
          buttonStyle="increment"
          counter={counter}
          setCounter={setCounter}
        />

        <Reset resetStyle="reset" counter={counter} setCounter={setCounter} />
      </div>
    </div>
  );
}

export default App;
