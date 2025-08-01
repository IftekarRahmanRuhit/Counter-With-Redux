
import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {

  // Hook to access the dispatch function from Redux store
  const dispatch = useAppDispatch();

// Function to handle increment action
  const handleIncrement = () => {
    dispatch(increment());
  };

  // Function to handle decrement action
  const handleDecrement = () => {
    dispatch(decrement());
  };

  // Accessing the count from the Redux store
  const {count} = useAppSelector((state) => state.counter);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Counter with Redux</h1>
      <button onClick={handleIncrement} className="btn btn-secondary">
        Increment
      </button>
      <div className="font-bold mt-2 text-2xl mb-2 ">
        <button className="btn btn-circle bg-amber-100 text-black text-2xl">{count}</button>
      </div>
      <button onClick={handleDecrement} className="btn btn-warning">
        decrement
      </button>
    </div>
  );
}

export default App;
