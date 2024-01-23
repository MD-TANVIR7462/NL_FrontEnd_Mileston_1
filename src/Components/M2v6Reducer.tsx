import React, { useReducer } from "react";

const M2v6Reducer = () => {
  const intialState = { count: 0 };

  const reducerFunc = (currenState, action) => {
   console.log(action);
    switch (action.type) {
      case "incriment":
        return { count: currenState.count++ };

      case "decriment":
        return { count: currenState.count - 1 };
      default:
        return currenState;
    }
  };

  const [state, dispatch] = useReducer(reducerFunc, intialState);

  return (
    <div className="min-h-dvh mt-[40%] min-w-[500px]  ml-[50%]">
      <h1>{state.count}</h1>
      <button onClick={()=>dispatch({type:"incriment"})} className="btn btn-circle btn-info">+</button>
      <button onClick={()=>dispatch({type:"decriment"})} className="btn btn-circle btn-info">-</button>
    </div>
  );
};

export default M2v6Reducer;
