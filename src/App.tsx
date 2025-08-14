
import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppSelector, useAppDispatch } from "./redux/hook";
import "./App.css";

function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);

  const handleIncrement = (amount: number) => {
    dispatch(increment(amount));
  };

  const handleDecrement = (amount: number) => {
    dispatch(decrement(amount));
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Darker Animated Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"
        style={{
          backgroundSize: '400% 400%',
          animation: 'gradientShift 15s ease infinite'
        }}
      />
      
      {/* Darker Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-element absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-full blur-xl"></div>
        <div className="bg-element-reverse absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-purple-600/10 to-indigo-600/10 rounded-full blur-xl"></div>
        <div className="bg-element absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-indigo-600/8 to-blue-600/8 rounded-full blur-xl"></div>
        <div className="bg-element-reverse absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 rounded-full blur-xl"></div>
        <div className="bg-element absolute top-1/2 left-10 w-20 h-20 bg-gradient-to-br from-purple-600/8 to-pink-600/8 rounded-full blur-xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="pro-card w-full max-w-lg rounded-3xl p-8 fade-in">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full border border-white/10 backdrop-blur-sm mb-4">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-medium text-white/80 tracking-wide">REDUX COUNTER</span>
            </div>
            <h1 className="text-gradient-primary text-4xl font-bold mb-2 tracking-tight">
              Counter with Redux
            </h1>
            <p className="text-white/60 text-sm font-medium">
               Redux Counter Application
            </p>
          </div>

          {/* Counter Display */}
          <div className="text-center mb-8">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-2xl scale-110"></div>
              <div className="counter-display relative w-32 h-32 rounded-full flex items-center justify-center text-white text-4xl font-bold border-2 border-white/10">
                {count}
              </div>
            </div>
            <div className="mt-4">
              <span className="text-white/50 text-sm font-medium tracking-wide">
                Current Value
              </span>
            </div>
          </div>

          {/* Increment Controls */}
          <div className="space-y-4 mb-6">
            <div className="divider-enhanced"></div>
            <div className="text-center">
              <h3 className="text-gradient-secondary text-lg font-semibold mb-3">INCREMENT</h3>
              <div className="flex gap-3">
                <button 
                  onClick={() => handleIncrement(1)}
                  className="btn-enhanced flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-blue-600/25 transition-all duration-300 hover:scale-105 border border-blue-500/30"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                  </svg>
                  +1
                </button>
                <button 
                  onClick={() => handleIncrement(5)}
                  className="btn-enhanced flex-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-purple-600/25 transition-all duration-300 hover:scale-105 border border-purple-500/30"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                  +5
                </button>
              </div>
            </div>
          </div>

          {/* Decrement Controls */}
          <div className="space-y-4 mb-6">
            <div className="divider-enhanced"></div>
            <div className="text-center">
              <h3 className="text-gradient-secondary text-lg font-semibold mb-3">DECREMENT</h3>
              <div className="flex gap-3">
                <button 
                  onClick={() => handleDecrement(1)}
                  className="btn-enhanced flex-1 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-orange-600/25 transition-all duration-300 hover:scale-105 border border-orange-500/30"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"/>
                  </svg>
                  -1
                </button>
                <button 
                  onClick={() => handleDecrement(5)}
                  className="btn-enhanced flex-1 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-red-600/25 transition-all duration-300 hover:scale-105 border border-red-500/30"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12L12 8l4 4"/>
                  </svg>
                  -5
                </button>
              </div>
            </div>
          </div>

          {/* Status Display */}
          <div className="stats-enhanced p-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-white/50 text-xs font-medium mb-1">Status</div>
                <div className={`text-sm font-bold ${
                  count > 0 ? 'text-green-400' : 
                  count < 0 ? 'text-red-400' : 
                  'text-blue-400'
                }`}>
                  {count > 0 ? 'Positive' : count < 0 ? 'Negative' : 'Zero'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-white/50 text-xs font-medium mb-1">Type</div>
                <div className="text-sm font-bold text-white/80">
                  {count % 2 === 0 ? 'Even' : 'Odd'}
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-6">
            <p className="text-white/40 text-xs font-medium">
              Built with React, Redux & TypeScript
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
