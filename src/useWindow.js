// hook rules
// name must start with use
// can only use hooks in functional components
// and can only use at root level of component (can't use in function or loop or if statement etc)

import { useState, useEffect } from "react";
const useWindow = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const changeWindowSize = () => {
    console.log("resized");
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    console.log("useWindow useEffect called, add listner");
    // old school javascript, true is needed on window eventlisteners
    window.addEventListener("resize", changeWindowSize, true);

    // remove eventListner when component unmounts
    return () => {
      console.log("remove listner...");
      // not working
      window.removeEventListener("resize", changeWindowSize, true);
    };
  }, []);

  return windowSize;
};

export default useWindow;
