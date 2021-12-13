import axios from "axios";
import { useEffect, useState } from "react";
const LifeCycleFunc = (props) => {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [data, setData] = useState(null);

  // [] when can do on mount on on unmount
  useEffect(() => {
    console.log("useEffect with [] called");
    console.log(count);
    getData();

    // call this function on unmount
    return () => {
      console.log("unmount");
    };
  }, []);

  // without [] do on mount and any time any state changes
  useEffect(() => {
    console.log("useEffect without [] called");
  });

  // with [count] do on mount and any time any count state changes
  useEffect(() => {
    if (count > 10) {
      setCount(0);
    }

    console.log("useEffect with [count] called");
  }, [count]);

  const getData = async () => {
    let res = await axios.get("https://reqres.in/api/users?page=2");
    setData(res.data.data);
  };

  const add = () => {
    setCount(count + 1);
    setTotal(total + 1);
  };

  console.log("LifeCycleFunc rendering(returning)");
  return (
    <div>
      <h1>LifeCycleFunc</h1>
      <p>propFromApp: {props.propFromApp}</p>
      <button onClick={add}>add</button>
      <button onClick={() => setTotal(total + 1)}>change Total</button>
      <p>count: {count}</p>
      <p>total: {total}</p>

      <p>data:</p>
      <code>{JSON.stringify(data)}</code>
    </div>
  );
};

export default LifeCycleFunc;
