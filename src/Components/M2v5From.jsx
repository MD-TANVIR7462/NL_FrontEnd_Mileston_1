import React, { useState, useTransition } from 'react';

const M2v5From = () => {
const [user ,setUsaer]= useState({name:'',email:''})
const hendleChange = (e)=>{

   const feildName = e.target.name
   const value = e.target.value

 setUsaer( {...user,[feildName]: value})

}
const handleSubmit = (e)=>{
   e.preventDefault()
   console.log(user);
}

   return (
      <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
   
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body"onSubmit={handleSubmit} >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input  type="email" onChange={hendleChange} name='email' placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="text" placeholder="Name"  name='name'onChange={hendleChange} className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" >Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
   );
};

export default M2v5From;