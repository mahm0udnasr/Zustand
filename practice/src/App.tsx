import { useCounter } from "./store.ts";

const App = () => {
  const { counter, increment, decrement } = useCounter();
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <div className="cardButton">
        <button onClick={increment}>
          <span className="shadow"></span>
          <span className="edge"></span>
          <span className="front text">+</span>
        </button>
        <button onClick={decrement}>
          <span className="shadow"></span>
          <span className="edge"></span>
          <span className="front text">-</span>
        </button>
      </div>
    </div>
  );
};

export default App;
