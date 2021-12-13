import "./App.css";
import { useState } from "react";
import { useToggle } from "./useToggle";
import LifeCycleClass from "./LifecycleClass";

function App() {
  const [showClass, toggleClass] = useToggle(true);
  const [stateFromApp, setStateFromApp] = useState(0);

  console.log("App component rendering");
  return (
    <div className="App">
      <div onClick={toggleClass}>toggle class component</div>
      <button onClick={() => setStateFromApp(Math.random())}>add</button>
      {showClass && <LifeCycleClass propFromApp={stateFromApp} />}
    </div>
  );
}

export default App;
