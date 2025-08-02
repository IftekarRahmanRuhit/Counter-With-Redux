
import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {

  // Hook to access the dispatch function from Redux store
  const dispatch = useAppDispatch();

// Function to handle increment action
  const handleIncrement = (amount:number) => {
    dispatch(increment(amount));
  };

  // Function to handle decrement action
  const handleDecrement = (amount:number) => {
    dispatch(decrement(amount));
  };

  // Accessing the count from the Redux store
  const {count} = useAppSelector((state) => state.counter);

  return (
   <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      {/* Main Container */}
      <div className="card w-full max-w-md bg-base-100/90 backdrop-blur-sm shadow-2xl border border-base-300/20">
        <div className="card-body items-center text-center space-y-6">
          
          {/* Header Section */}
          <div className="space-y-2">
            <div className="badge badge-primary badge-lg font-semibold tracking-wide">
              REDUX COUNTER
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Counter with Redux
            </h1>
          </div>

          {/* Increment Section */}
          <div className="space-y-3 w-full">
            <div className="divider divider-primary text-sm font-medium opacity-60">
              INCREMENT
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full">
              <button 
                onClick={() => handleIncrement(1)} 
                className="btn btn-primary btn-lg flex-1 shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                </svg>
                +1
              </button>
              <button 
                onClick={() => handleIncrement(5)} 
                className="btn btn-secondary btn-lg flex-1 shadow-lg hover:shadow-secondary/25 transition-all duration-300 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
                +5
              </button>
            </div>
          </div>

          {/* Counter Display */}
          <div className="py-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl"></div>
              <button className="relative btn btn-circle btn-lg bg-gradient-to-br from-amber-50 to-amber-100 text-black text-3xl font-bold shadow-2xl border-2 border-amber-200 hover:scale-110 transition-all duration-300 w-24 h-24">
                {count}
              </button>
            </div>
            <div className="mt-2">
              <div className="badge badge-outline badge-sm font-mono">
                Current Value
              </div>
            </div>
          </div>

          {/* Decrement Section */}
          <div className="space-y-3 w-full">
            <div className="divider divider-warning text-sm font-medium opacity-60">
              DECREMENT
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full">
              <button 
                onClick={() => handleDecrement(1)} 
                className="btn btn-warning btn-lg flex-1 shadow-lg hover:shadow-warning/25 transition-all duration-300 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"/>
                </svg>
                -1
              </button>
              <button 
                onClick={() => handleDecrement(5)} 
                className="btn btn-warning btn-lg flex-1 shadow-lg hover:shadow-warning/25 transition-all duration-300 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12L12 8l4 4"/>
                </svg>
                -5
              </button>
            </div>
          </div>

          {/* Stats Footer */}
          <div className="stats stats-horizontal bg-base-200/50 shadow-inner">
            <div className="stat place-items-center py-2">
              <div className="stat-title text-xs">Status</div>
              <div className={`stat-value text-sm ${count > 0 ? 'text-success' : count < 0 ? 'text-error' : 'text-info'}`}>
                {count > 0 ? 'Positive' : count < 0 ? 'Negative' : 'Zero'}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-1/2 left-5 w-16 h-16 bg-accent/10 rounded-full blur-xl animate-pulse"></div>
    </div>



  );
}

export default App;
