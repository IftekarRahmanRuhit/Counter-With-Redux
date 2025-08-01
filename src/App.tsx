import { useDispatch } from "react-redux";
import { decrement, increment } from "./redux/features/counter/counterSlice";

function App() {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Counter with Redux</h1>
      <button onClick={handleIncrement} className="btn btn-secondary">
        Increment
      </button>
      <div className="font-bold mt-2 text-2xl">0</div>
      <button onClick={handleDecrement} className="btn btn-warning">
        decrement
      </button>
    </div>
  );
}

export default App;
