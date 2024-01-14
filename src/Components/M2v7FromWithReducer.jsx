import React, { useReducer } from "react";

const M2v7FromWithReducer = () => {
  const initialData = { userName: "", password: "" };
  const reducerFunction = (currentValue, action) => {
    switch (action.type) {
      case "Password":
        return { ...currentValue, password: action.payload };
      case "userName":
        return { ...currentValue, userName: action.payload };
      default:
        return currentValue;
    }
  };

  const [userData, dispatch] = useReducer(reducerFunction, initialData);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
                onChange={(e)=>dispatch({type:"userName",payload:e.target.value})}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
                onChange={(e)=>dispatch({type:"Password",payload:e.target.value})}
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default M2v7FromWithReducer;
