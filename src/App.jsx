import Timer from './components/timer.jsx';

import "./App.css";

const ATHLETES = ["Simone", "Salvatore", "Carmelo", "Giancarlo"];

function App() {
 return (
    <>
      <Timer />
      {ATHLETES.map(athlete => (
        <Timer athlete={athlete} />
      ))}
    </>
  ) 
}

export default App;
