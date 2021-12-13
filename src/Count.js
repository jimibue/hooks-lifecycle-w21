//React, React Router, Redux

import { useReducer } from "react";
// the action is a js {type:'string',...optional}
const countReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "MINUS":
      return state - 1;
    case "TIMES":
      return state * action.num;
    default:
      return state;
  }
};

const usersReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [action.user, ...state];
    case "DELETE":
      return state.filter((user) => user.id !== action.id);

    default:
      return state;
  }
};
currentUsers = [{ id: 1, name: "tony" }];
let x = usersReducer(currentUsers, {
  type: "ADD",
  user: { id: 2, name: "john" },
});

x;

const Count = () => {
  // const [state, dispatch] = useReducer(reducer, intitState)
  const [count, dispatch] = useReducer(countReducer, 12);
  const [users, dispatchUsers] = useReducer(usersReducer, [
    { id: 1, name: "tony" },
    { id: 2, name: "Jill" },
  ]);
  const add = () => {
    dispatch({ type: "ADD" });
  };

  const minus = () => {
    dispatch({ type: "MINUS" });
  };

  const times = () => {
    dispatch({ type: "TIMES", num: 3 });
  };
  const addUser = () => {
    dispatchUsers({ type: "ADD", user: { name: "yoyo", id: Math.random() } });
  };
  return (
    <div>
      <h1>Count</h1>
      <p>count: {count}</p>
      <button onClick={add}>add</button>
      <button onClick={minus}>minus</button>
      <button onClick={times}>times</button>
      <hr />
      <button onClick={addUser}>add USer</button>
      {users.map((u) => {
        return (
          <div>
            <h1>{u.name}</h1>
            <p>{u.id}</p>
            <p onClick={() => dispatchUsers({ type: "DELETE", id: u.id })}>
              delete
            </p>
          </div>
        );
      })}
    </div>
  );
};
export default Count;

// What is a reducer is a function that takes state and action
// return new state
