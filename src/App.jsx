import { useEffect, useState } from "react";
import { useRef } from "react";

import "./App.css";

function App() {
  // State to store the current count
  const [count, setCount] = useState(0);
  // State to control whether the timer is running
  const [isRunning, setIsRunning] = useState(false);

  const intervalRef = useRef(null);

  useEffect(() => {
    // If the timer is running and no interval is already set, start a new interval
    if (isRunning) {
      if (intervalRef.current !== null) return;
      // Set up the interval to increment count every second
      intervalRef.current = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    } else {
      // If the timer is paused or reset, clear the interval
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    // Cleanup(Dependency array): ensures the interval is cleared if isRunning changes
    return () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, [isRunning]);

  return (
    <>
      <h1>{count}</h1>
      <div className="button-wrapper">
        <button onClick={() => setIsRunning(true)}>Start</button>
        <button onClick={() => setIsRunning(false)}>Pause</button>
        <button
          onClick={() => {
            setCount(0);
            setIsRunning(false);
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
