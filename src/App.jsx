import Timer from "./components/timer.jsx";

import { ATHLETES, DEFAULT_ATHLETE } from "../data/athletes.js";
import "./App.css";

function App() {
  return (
    <>
      <h1>TRACKING ATHLETES' TIME</h1>
      <div className="timer-container">
        <Timer />
        {ATHLETES.map((athlete, index) => (
          <Timer key={index} athlete={athlete} />
        ))}
      </div>
    </>
  );
}

export default App;
