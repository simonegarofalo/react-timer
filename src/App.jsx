import { Link } from "react-router";

import Timer from "./components/timer.jsx";
import { ATHLETES, DEFAULT_ATHLETE } from "../data/athletes.js";

import "./App.css";
import "./index.css";

function App() {
  return (
    <>
      <h1>TRACKING ATHLETES' TIME</h1>
      <div className="timer-container">
        {ATHLETES.map((athlete) => (
          <Timer key={athlete.slug} athlete={athlete} />
        ))}
      </div>
    </>
  );
}

export default App;
