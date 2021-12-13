import "./App.css";
import { useState } from "react";
import { useToggle } from "./useToggle";
// import LifeCycleClass from "./LifecycleClass";
import LifeCycleFunc from "./LifeCycleFunc";
import useWindow from "./useWindow";
import Size from "./Size";
import Count from "./Count";

function App() {
  // const [showClass, toggleClass] = useToggle(true);
  const [showFunc, toggleFunc] = useToggle(true);

  const [stateFromApp, setStateFromApp] = useState(0);

  console.log("App component rendering");
  return (
    <div className="App">
      {/* <div onClick={toggleClass}>toggle class component</div> */}
      {/* <button onClick={() => setStateFromApp(Math.random())}>
        change app state
      </button> */}
      {/* {showClass && <LifeCycleClass propFromApp={stateFromApp} />}  */}

      {/* <div onClick={toggleFunc}>toggle functional component</div>
      {showFunc && <LifeCycleFunc propFromApp={stateFromApp} />} */}

      <div onClick={toggleFunc}>toggle size component</div>
      {showFunc && <Size />}
      <Count />
    </div>
  );
}

export default App;
