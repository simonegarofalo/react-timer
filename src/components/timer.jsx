import { DEFAULT_ATHLETE } from "/data/athletes.js";

import { useState, useEffect, useRef } from "react";

function formatTime(ms) {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  const centiseconds = Math.floor((ms % 1000) / 10);

  return (
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0") +
    ":" +
    String(centiseconds).padStart(2, "0")
  );
}

function Timer({ athlete = DEFAULT_ATHLETE, ...props }) {
  const [elapsed, setElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const startTimeRef = useRef(null);
  const accumulatedTimeRef = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      // Seleziona l'istante iniziale se non esiste
      if (startTimeRef.current === null) {
        startTimeRef.current = Date.now();
      }

      intervalRef.current = setInterval(() => {
        setElapsed(
          Date.now() - startTimeRef.current + accumulatedTimeRef.current
        );
      }, 50);
    } else {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    return () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, [isRunning]);

  return (
    <div className="timer-wrapper">
      <h3>{athlete.name}</h3>
      <img src={athlete.avatar} alt={athlete.name} className="athlete-avatar" />
      <h4>{formatTime(elapsed)}</h4>
      <div className="button-wrapper">
        <button
          onClick={() => {
            setIsRunning(true);
            startTimeRef.current = Date.now();
          }}
        >
          Start
        </button>

        <button
          onClick={() => {
            setIsRunning(false);
            accumulatedTimeRef.current += Date.now() - startTimeRef.current;
            startTimeRef.current = null;
          }}
        >
          Pause
        </button>

        <button
          onClick={() => {
            setElapsed(0);
            setIsRunning(false);
            accumulatedTimeRef.current = 0;
            startTimeRef.current = null;
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;
